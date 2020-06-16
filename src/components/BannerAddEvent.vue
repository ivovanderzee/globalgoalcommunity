<template>
    <div class="HomeBannerInitatief">
        <h1 class="Color-white">Je eigen samenkomst of evenement toevoegen?</h1>
        <div class="HomeBannerInitatief-button-wrapper">
            <WhiteButton btnText="Plan samenkomst"/>
            <router-link to="/question"><WhiteButton btnText="Plan evenement"/></router-link>
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
</style>
