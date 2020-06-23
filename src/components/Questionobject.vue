<template>
        <div class="Wrapper">
            <div class="Wrapper-centre">
                <div class="SolutionBlock">

                   <div class="SolutionBlock-block" v-for="event in events" v-bind:key="event.event_id">
                       <router-link v-bind:to="'/post/' +event.event_id">

                        <div class="SolutionBlock-block-image"  :style="{backgroundImage:`url(${event.image})`}"></div>
                        <div class="SolutionBlock-block-text">
                        <p class="bold">{{ event.title }} </p>
                        <div class="SolutionBlock-block-text-heart">
                            <p> {{ event.author }} | {{ event.date }}</p>
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
                events: [],
                event: {
                    event_id: null,
                    author: null,
                    title: null,
                    date: null,
                    image: null,
                }
            }
        },
        created() {
            db.collection("events").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    // console.log(doc.id, " => ", doc.data());
                   this.events.push(doc.data());
                })
            })
        }
    }
</script>

<style scoped>
    .Wrapper{
        width: 100vw;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Wrapper-centre{
        width: 80vw;
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
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
</style>