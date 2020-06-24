<template>

    <div :style="cssProps" class="HomeHeader">
        <div class="HomeHeader-wrapper" >
            <h1>Het kennisplatform voor het delen van duurzame SDG oplossingen</h1>
            <div class="HomeHeader-input">
                <input type="text" id="fname" name="fname" placeholder="Hoe kan ik mijn eigen eten..." >
                <GreenButton btnText="Zoeken"/>
            </div>
            <router-link to="/about"> <p>Lees hier meer over de SDG's. <i class="fas fa-angle-right"></i></p> </router-link>
        </div>

        <div class="arrow">

  <bouncingArrow></bouncingArrow>

        </div>
  

<!--        <div class="HomeHeader-gbalk"></div>-->
  </div>
  

</template>

<script>
    import GreenButton from "./GreenButton";
    import bouncingArrow from "./bouncingArrow"

    export default {
        name: 'HomeHeader',
        props: {
            btnText: String
        },
        components: {
            GreenButton,
            bouncingArrow
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

.arrow{
    position: absolute;
    margin-top: 34vh;
    left: 0;
    right: 0;
}

    .HomeHeader{
        width: 100vw;
        height: 77vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #388E3C;
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
       
    }

    .HomeHeader h1{
        width: 40vw;
        margin-top: -100px;
        text-align: left;
        font-size: 50px;
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
        margin: 20px 0;
        text-align: right;
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
