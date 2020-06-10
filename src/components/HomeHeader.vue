<template>
    <div :style="cssProps" class="HomeHeader">
        <div class="HomeHeader-wrapper" >
            <h1>Het kennisplatform voor het delen van duurzame SDG oplossingen</h1>
            <div class="HomeHeader-input">
                <input type="text" id="fname" name="fname" placeholder="Hoe kan ik mijn eigen eten..." >
                <GreenButton btnText="Zoeken"/>
            </div>
            <router-link to="/about"> <p>Nog niet bekend met de SDG’s? Hier lees je er meer over <i class="fas fa-angle-right"></i></p> </router-link>
        </div>

<!--        <div class="HomeHeader-gbalk"></div>-->
    </div>
</template>

<script>
    import GreenButton from "./GreenButton";

    export default {
        name: 'HomeHeader',
        props: {
            btnText: String
        },
        components: {
            GreenButton
        },
        data() {
            return {
                cssProps: {
                    backgroundImage: `url(${require('@/assets/homeHeader.jpg')})`,
                }
            }
        }
    }
</script>

<style scoped>
    .HomeHeader{
        width: 100vw;
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #388E3C;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .HomeHeader h1{
        width: 40vw;
        text-align: left;
    }

    .HomeHeader-wrapper{
        width: 35vw;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        position: relative;
    }

    .HomeHeader-input{
        display: flex;
        margin: 30px 0;
    }

    input{
        background-color: #eeeeee;
        width: 30vw;
        height: 48px;
        border: none;
        border-radius: 7px;
    }

    /*.HomeHeader-gbalk{*/
    /*    background-color: #388E3C;*/
    /*    height: 18vh;*/
    /*    width: 100vw;*/
    /*    position: absolute;*/
    /*    bottom: 160px;*/
    /*    left: 0;*/
    /*}*/
</style>
