<template>
    <div class="HomeBannerInitatief">
        <h1 class="Color-white">Je eigen initatief toevoegen of sparringspartner worden?</h1>
        <div class="HomeBannerInitatief-button-wrapper">
            <WhiteButton btnText="Sparingspartner worden"/>
            <router-link to="/question"><WhiteButton btnText="Naar de vragenmuur"/></router-link>
        </div>
    </div>
</template>

<script>
    import WhiteButton from "./WhiteButton";

    export default {
        name: 'HomeBannerInitatief',
        props: {
            btnText: String
        },
        components: {
            WhiteButton
        }
    }
</script>

<style scoped>
    .HomeBannerInitatief{
        width: 100vw;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #388E3C;
    }

    .HomeBannerInitatief-button-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0;
    }

    @media (max-width: 760px) {
        .HomeBannerInitatief {
            display: none;
        }
    }
</style>
