<template>
        <div class="Wrapper">
            <div class="Wrapper-centre">      

<div class="filter">
                <ul class="filter-item">
                        <li :class="{active: activeItem == 1}" @click='filterPosts("new"); setActive(1);'>Nieuwste Oplossingen</li>
                        <li :class="{active: activeItem == 2}" @click='filterPosts("highlight"); setActive(2);'>Uitgelicht door anderen</li>
                        <li :class="{active: activeItem == 3}" @click='filterPosts("recommended"); setActive(3);'>Aangeraden door ons</li>
                        <li :class="{active: activeItem == 4}" @click='filterPosts("podcast"); setActive(4);'>Podcasts</li>
                </ul>
                <div>
                    <GreenButton btn-text="Filter"></GreenButton>
                </div>
            </div>

                <div class="SolutionBlock">

                   <div class="SolutionBlock-block animate__bounce" v-for="post in filteredPosts" v-bind:key="post.post_id">
                       <router-link v-bind:to="'/post/' + post.post_id">

                        <div class="SolutionBlock-block-image"  :style="{backgroundImage:`url(${post.image})`}"></div>
                        <div class="SolutionBlock-block-text">
                        <p class="bold">{{ post.title }} </p>
                        <div class="SolutionBlock-block-text-heart">
                            <p> {{ post.author }} | {{ post.date }}</p>
                            <i class="far fa-heart"></i>
                        </div>
                        </div>
                       </router-link>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>

   import { db } from '../main'
       import GreenButton from "./GreenButton";

    export default {
        data(){
            return{
                activeItem: 0,
                filter: '',
                posts: [],
                post: {
                    post_id: null,
                    author: null,
                    title: null,
                    date: null,
                    image: null,
                    category: null,
                }
            }
        },

components: {
            GreenButton,

        },

  computed: {
  
    filteredPosts: function() {
      return this.posts.filter(post => {
        return post.category.match(this.filter);
      });
    }
  },

        created() {
            db.collection("posts").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    // console.log(doc.id, " => ", doc.data());
                   this.posts.push(doc.data());
                })
            })
        },

        methods: {

            filterPosts(category) {
             
             this.filter = category;
             console.log(this.filter);
           

            }, 

            setActive(index){

                this.activeItem = index; 
                

            }

        },
    }
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@4.0.0";

    ul{
        
        list-style-type: none;

    }

  .filter{
        width: 100%;
        height: 4vh;
        margin-bottom: 3vw;
        margin-top: 5vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .filter-item{
        display: flex;
    
        justify-content: center;
        align-items: center;
        list-style-position: none;
    }

    .filter-item li{
        margin-right: 50px;
    }

    .active{
        font-weight: bold;
    }

    .SolutionBlock{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .SolutionBlock-block{
        width: 330px;
        height: 33vh;
        box-shadow: 0 2px 10px #efefef;
        margin: 20px 0;
       
    }

    .SolutionBlock-block-text{
        margin-left: 15px;
        display: flex;
        width: 90%;
        height: 13vh;
        justify-content: center;
        flex-direction: column;
    }

    .SolutionBlock-block-text p{
        text-align: left;
        margin-top: 10px;
    }

    .SolutionBlock-block-text-heart{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .SolutionBlock-block-image {
        width: 330px;
        height: 20vh;
        background-color: #dfdfdf;
        background-size: cover;
    }
@media (max-width: 760px) {
    .filter {
        display: none;
    }
}
</style>