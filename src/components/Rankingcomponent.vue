<template>
    <div class="Wrapper">
        <div Class="Wrapper-centre">
            <div class="QuestionPost"  v-for="ranking in rankings" v-bind:key="ranking.ranking_id" >
                <div class="QuestionPost-image" :style="{backgroundImage:`url(${ranking.image})`}"></div>
                <div  class="QuestionPost-text">
                    <h2>{{ ranking.points }} </h2>
                    <p>{{ ranking.text }}</p>
                    <div class="QuestionPost-text-info">
                        <p><span class="bold">Tags:</span> <span class="Color-green">{{ ranking.tags }}</span></p>
                        <p><span class="Color-gray">8 weken geleden | laatste reageersel {{ question.family }} </span> </p>
                    </div>
                </div>

                <div class="QuestionPost-button">
                    <GreenButton btnText="Reageren"/>
                    <p><span class="bold">of</span> Global Rankings</p>
                </div>
            </div>
          </div>
    </div>
</template>

<script>
    import GreenButton from "./GreenButton";
    import {db} from "../main";


    export default {
        name: 'Rankingscomponent',
        props: {
            btnText: String
        },
        components: {
            GreenButton,
        },
        data(){
            return{
                rankings: [],
                ranking: {
                    ranking_id: null,
                    points: null,
                    text: null,
                    family: null,
                    tags: null,
                }
            }
        },
        created() {
            db.collection("rankings").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    this.rankings.push(doc.data());
                })
            })
        }
    }
</script>

<style scoped>
    .QuestionPost{
        height: 100px;
        width: auto;
        padding: 20px;
        background-color: white;
        box-shadow: 0 2px 10px #efefef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        border-radius: 10px;
        margin-top: 2vw;
    }

    .QuestionPost-text{
        width: 50vw;
    }

    .QuestionPost-text p{
        margin-top: 5px;
    }

    .QuestionPost-text-info{
        width: 600px;
        display: flex;
        justify-content: space-between;
    }

    .QuestionPost-image{
        width: 200px;
        background-color: #dfdfdf;
        height: 110px;
        background-size: cover ;
    }

    .QuestionPost-button{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .QuestionPost-button p{
       margin-top: 10px;
    }
</style>
