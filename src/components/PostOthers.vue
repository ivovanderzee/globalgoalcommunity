<template>
    <div class="PostOthers">
        <div class="PostOthers-text">
            <h1>Toepassingen van andere mensen</h1>
            <p>We zien graag hoe jij deze oplossing hebt toegepast. Blijf jouw oplossing delen met #GlobalGoalsCommunity zodat anderen mensen inspiratie uit jou werk kunnen halen!</p>
        </div>
        <div class="PostOthers-image">
            <div class="PostOthers-image-item"></div>
            <div class="PostOthers-image-item"></div>
            <div class="PostOthers-image-item"></div>
            <div class="PostOthers-image-item"></div>
            {{ PostOthersImage }}
        </div>
        <div class="PostOthers-button">
            <GreenButton btnText="Foto toevoegen"/>
        </div>
    </div>
</template>
<script>
    import GreenButton from "./GreenButton";

    export default {
        name: 'header',
        components: {
            GreenButton,
        },props: [
            'PostOthersImage'
        ],
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

    .PostOthers-image-item{
        width: 200px;
        height: 200px;
        margin: 30px 10px;
        background-color: white;
    }
</style>