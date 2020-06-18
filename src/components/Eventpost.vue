<template>
        <div class="Wrapper">
            <div class="Wrapper-centre">
                <div class="SolutionBlock">

                   <div class="SolutionBlock-block" v-for="post in posts" v-bind:key="post.post_id">
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

    export default {
        data(){
            return{
                posts: [],
                post: {
                    post_id: null,
                    author: null,
                    title: null,
                    date: null,
                    image: null,
                }
            }
        },
        created() {
            db.collection("posts").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    // console.log(doc.id, " => ", doc.data());
                   this.posts.push(doc.data());
                })
            })
        }
    }
</script>

<style scoped>
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
</style>