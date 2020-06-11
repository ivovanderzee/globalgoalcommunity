<template>
        <div class="Wrapper">
            <div class="Wrapper-centre">
                <div class="SolutionBlock">
                    <div class="SolutionBlock-block">
                        <div class="SolutionBlock-block-image"></div>
                        <div class="SolutionBlock-block-text">
                            <p class="bold">{{ post.position }} </p>
                            <div class="SolutionBlock-block-text-heart">
                                <p> {{ post.name }}</p>
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    // import Vue from 'vue'
    import Vue from 'vue/dist/vue.js';
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
        data(){
            return{
                post: {
                    post_id: null,
                    name: null,
                    position: null
                }
            }
        },
        created() {
            db.collection("posts").get().then(querySnapshot => {
                let post;
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                   post = doc.data();
                    // console.log(post);
                })

                this.post.post_id = post.post_id;
                this.post.name = post.name;
                this.post.position = post.position;
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
