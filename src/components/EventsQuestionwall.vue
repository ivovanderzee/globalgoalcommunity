<template>
        <div class="Wrapper">
            <div class="Wrapper-centre">
              <h1 class="Color-black">Recent geplaatste evenementen</h1>
                <div class="SolutionBlock">

                   <div class="SolutionBlock-block" v-for="footer in footers" v-bind:key="footer.event_id">
                       <router-link v-bind:to="'/post/' +footer.footer_id">

                        <div class="SolutionBlock-block-image"  :style="{backgroundImage:`url(${footer.image})`}"></div>
                        <div class="SolutionBlock-block-text">
                        <p class="bold">{{ footer.title }} </p>
                        <div class="SolutionBlock-block-text-heart">
                            <p> {{ footer.author }} | {{ footer.date }}</p>
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
                footers: [],
                footer: {
                    event_id: null,
                    author: null,
                    title: null,
                    date: null,
                    image: null,
                }
            }
        },
        created() {
            db.collection("footers").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    // console.log(doc.id, " => ", doc.data());
                   this.footers.push(doc.data());
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