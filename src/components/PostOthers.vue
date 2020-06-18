<template>
    <div class="PostOthers">
        <div class="PostOthers-text">
            <h1>Toepassingen van andere mensen</h1>
            <p>We zien graag hoe jij deze oplossing hebt toegepast. Blijf jouw oplossing delen met #GlobalGoalsCommunity zodat anderen mensen inspiratie uit jou werk kunnen halen!</p>
        </div>
        <div class="PostOthers-image"  v-for="toepassing in toepassingen" v-bind:key="toepassing.toepassing_id">
            <div class="PostOthers-item" :style="{backgroundImage:`url(${toepassing.image1})`}"></div>
            <div class="PostOthers-item" :style="{backgroundImage:`url(${toepassing.image2})`}"></div>
            <div class="PostOthers-item" :style="{backgroundImage:`url(${toepassing.image3})`}"></div>
            <div class="PostOthers-item" :style="{backgroundImage:`url(${toepassing.image4})`}"></div>
        </div>
        <div class="PostOthers-button">
            <GreenButton btnText="Foto toevoegen"/>
        </div>
    </div>
</template>
<script>
    import GreenButton from "./GreenButton";
    import {db} from "../main";

    export default {
        name: 'header',
        components: {
            GreenButton,
        },props: [
            'PostOthersImage'
        ], data(){
            return{
                toepassingen: [],
                toepassing: {
                    toepassing_id: null,
                    image1: null,
                    image2: null,
                    image3: null,
                    image4: null,
                },
            }
        },   created() {
            db.collection("toepassingen").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    if (doc.data().toepassing_id == this.$route.params.postId){
                        this.toepassingen.push(doc.data());
                    }
                })
            })
        }
    }
</script>

<style>
    .PostOthers{
        padding: 13vh;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #C8E6C9;
    }

    .PostOthers-text p{
        margin-top: 10px;
        width: 40vw;
    }

    .PostOthers-image{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .PostOthers-item {
        width: 200px;
        height: 200px;
        margin: 30px 10px;
        /*background-color: #dfdfdf;*/
        background-size: cover;
    }
</style>