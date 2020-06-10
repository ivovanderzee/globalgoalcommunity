<template>
        <div class="Wrapper">
            <div class="Wrapper-centre">
                <div class="SolutionBlock">
<!--                    vanaf hier moet ik foreach loopen-->
                    <div class="SolutionBlock-block">
                        <div class="SolutionBlock-block-image"></div>
                        <div class="SolutionBlock-block-text">
                            <p class="bold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <div class="SolutionBlock-block-text-heart">
                                <p>Joanne Ye | 23-06-2020</p>
                                <i class="far fa-heart"></i>
                            </div>

<!--                    Dit is een test print uit de database -->
<!--                            <li  v-for="post in posts" v-bind:key="post">-->
<!--                                {{ post.name }}-->
<!--                            </li>-->

                             {{ post }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    // import db from "../main"
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
        name: 'SolutionBlock',
        // props: {
        //     post_id: null,
        //     name: null,
        //     position: null
        // },
        data(){
            return{
                posts: [],
                post: {
                    post_id: null,
                    name: null,
                    position: null
                }
            }
        },
        created() {
            db.collection("posts").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    let post = doc.data();

                    // console.log(post);
                    this.posts.push(post);
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
        margin-top: 5vw;
        margin-bottom: 5vw;
    }
    .SolutionBlock-block{
        width: 260px;
        height: 30vh;
        background-color: white;
        box-shadow: 0 2px 10px #efefef;
        margin: 20px 0;
    }

    .SolutionBlock-block-text-heart{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .SolutionBlock-block-text{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }

    .SolutionBlock-block-text p{
        margin-top: 10px;
    }

    .SolutionBlock-block-image{
        width: 260px;
        height: 17vh;
        background-color: #dfdfdf;
    }
</style>
