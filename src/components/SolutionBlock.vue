<template>
        <div class="Wrapper">
            <div class="Wrapper-centre">
                <div class="SolutionBlock">

                    <div class="SolutionBlock-block" v-for="post in posts" v-bind:key="post.post_id">
<!--                        <div class="SolutionBlock-block-image" id="example" :style="`background-image: url('')`">-->
                            <div class="SolutionBlock-block-image"  :style="{backgroundImage:`url(${post.image})`}">
                        </div>
                        <div class="SolutionBlock-block-text">
                            <p class="bold">{{ post.title }} </p>
                            <div class="SolutionBlock-block-text-heart">
                                <p> {{ post.author }} | {{ post.date }}</p>
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>
    import Vue from 'vue'
    import { firestorePlugin } from 'vuefire'
    import firebase from 'firebase/app'
    import 'firebase/firestore'

    Vue.use(firestorePlugin);

    firebase.initializeApp({
        databaseURL: "https://globalgoalscommunity.firebaseio.com",
        projectId: "globalgoalscommunity",
    });

    const db = firebase.firestore();

    export default {
        el: '#example',
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
        margin-bottom: 5vw;
    }
    .SolutionBlock-block{
        width: 290px;
        height: 30vh;
        box-shadow: 0 2px 10px #efefef;
        margin: 20px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: white;
    }

    .SolutionBlock-block-text{
        display: flex;
        width: 80%;
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

    .SolutionBlock-block-image{
        width: 290px;
        height: 17vh;
        background-color: #dfdfdf;
        background-size: cover;
    }
</style>
