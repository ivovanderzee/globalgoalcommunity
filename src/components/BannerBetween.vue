<template>
    <div class="BannerBetween">
        <h1 class="Color-white">Je eigen initatief toevoegen of sparringspartner worden?</h1>
        <div class="BannerBetween-button-wrapper">
            <GreenButton btnText="Sparingspartner worden"/>
            <router-link to="/question"><GreenButton btnText="Naar de vragenmuur"/></router-link>
        </div>
    </div>
</template>

<script>
    import GreenButton from "./GreenButton";

    export default {
        name: 'BannerBetween',
        props: {
            btnText: String
        },
        components: {
            GreenButton,

        }
    }
</script>

<style scoped>
    .BannerBetween {
        width: 100vw;
        height: 35vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #EBEBEB;
    }
    .BannerBetween h1{
        color: #388E3C;
    }

    .BannerBetween-button-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0;
        color:green;

    }
</style>