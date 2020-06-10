<template>
   <div class="Wrapper-gray">
       <div class="Wrapper-centre-gray">
           <div class="EventsQuestionwall">
               <h1>Wat staat er op het programma</h1>

               <div class="EventsQuestionwall-wrapper">
                   <div class="EventsQuestionwall-items">
                       <div class="EventsQuestionwall-item">
                           <div class="EventsQuestionwall-item-image">hier image</div>
                           <div class="EventsQuestionwall-item-text">
                               <h3>Groene peper: webinars over duurzaamheid in het onderwijs</h3>
                           </div>
                       </div>
                       <div class="EventsQuestionwall-item-date bold Color-white">09 <br> JUN</div>
                   </div>

                   <div class="EventsQuestionwall-items">
                       <div class="EventsQuestionwall-item">
                           <div class="EventsQuestionwall-item-image">hier image</div>
                           <div class="EventsQuestionwall-item-text">
                               <h3>Groene peper: webinars over duurzaamheid in het onderwijs</h3>
                           </div>
                       </div>
                       <div class="EventsQuestionwall-item-date bold Color-white">09 <br> JUN</div>
                   </div>

                   <div class="EventsQuestionwall-items">
                       <div class="EventsQuestionwall-item">
                           <div class="EventsQuestionwall-item-image">hier image</div>
                           <div class="EventsQuestionwall-item-text">
                               <h3>Groene peper: webinars over duurzaamheid in het onderwijs</h3>
                           </div>
                       </div>
                       <div class="EventsQuestionwall-item-date bold Color-white">09 <br> JUN</div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>

    export default {
        name: 'EventsQuestionwall',
    }
</script>

<style scoped>
    .EventsQuestionwall{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .EventsQuestionwall h1{
        margin: 3vw 0;
    }

    .EventsQuestionwall-wrapper {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        margin-bottom: 6vw;
    }

    .EventsQuestionwall-items{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .EventsQuestionwall-item{
        width: 300px;
        height: 40vh;
        background-color: white;
        position: relative;
    }

    .EventsQuestionwall-item-image{
        width: 100%;
        height: 60%;
        background-color: gray;
    }

    .EventsQuestionwall-item-text{
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .EventsQuestionwall-item-date{
        margin-top: 30px;
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
