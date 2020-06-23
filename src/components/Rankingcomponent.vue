<template>
    <div class="Wrapper">
        <div Class="Wrapper-centre">
            <div class="QuestionPost"  v-for="ranking in rankings" v-bind:key="ranking.ranking_id" >
                <div class="QuestionPost-image" :style="{backgroundImage:`url(${ranking.image})`}"></div>
                <div  class="QuestionPost-text">
                    <h2>{{ ranking.points }} </h2>
                    <p>{{ ranking.text }}</p>
                    <div class="QuestionPost-text-info">
                        <p><span class="bold">Ranking:</span> <span class="Color-green">{{ ranking.tags }}</span></p>
                        <p><span class="Color-gray">Family: {{ ranking.family }} </span> </p>
                    </div>
                </div>

                <div class="QuestionPost-button">
                    <GreenButton btnText="Naar Family"/>
                    <p><span class="bold">Global</span> Ranking List</p>
                </div>
            </div>
          </div>
    </div>
</template>

<script>
    import GreenButton from "./GreenButton";
    import {db} from "../main";


    export default {
        name: 'QuestionPost',
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

    .QuestionPost{
        height: 130px;
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
        width: 210px;
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
