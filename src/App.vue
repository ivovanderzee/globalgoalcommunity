<template>
    <div id="app">
        <div id="nav">
            <router-link to="/"><img src="./assets/logoGGC.png"></router-link>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">Over ons</router-link> |
            <router-link to="/event">Events</router-link> |
            <router-link to="/question">Vragenmuur</router-link> |
            <router-link to="/login">Login</router-link>
        </div>

        <div class="test">
            x
        </div>

        <router-view @authenticated="setAuthenticated" />

        <div id="footer">
            <div id="footer-context">
                <div class="footer-colom">
                    <img src="./assets/logoGGC.png">
                </div>
                <div class="footer-colom">
                    <p class="bold">17 SDG's</p>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div class="footer-colom">
                    <p class="bold">Community</p>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div class="footer-colom">
                    <p class="bold">Over ons</p>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div class="footer-colom">
                    <p class="bold">Contact</p>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
            <div id="footer-line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',

        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "ggc",
                    password: "ad"
                }
            }
        }}
</script>

<style>

    .test{
        background-color: red;
        width: 100vw;
        padding: 25px 0;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    *{
        margin: 0;
        padding: 0;

    }

    a{
        text-decoration: none;
    }

    p{
        line-height: 26px;
    }

    #nav {
        padding: 10px 0;
        position: fixed;
        width: 100%;
        background-color: white;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #nav img{
        height: 30px;
        margin-right: 5vw;
    }

    #nav a {
        font-weight: bold;
        margin: 10px;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #388E3C;
    }

    #footer{
        width: 100vw;
        padding-top: 30px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    #footer-context{
        width: 70vw;
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
    }

    #footer-context ul{
          list-style-type: none;
    }

    #footer-context li{
       margin-top: 10px;
    }

    .footer-colom{
       text-align: left;
        width: 10vw;
        padding-bottom: 30px;
    }

    .footer-colom img{
        height: 60px;
    }

    #footer-line{
        background-color: #388E3C;
        width: 100vw;
        padding: 4px;
    }

    .Color-green{
        color:  #388E3C;
    }

    .Color-white{
        color: white;
    }

    .bold{
        font-weight: bolder;
    }

    /*--------------*/
    .Wrapper{
        width: 100vw;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Wrapper-gray{
        width: 100vw;
        background-color: #EBEBEB;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Wrapper-green{
        width: 100vw;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Wrapper-lgreen{
        width: 100vw;
        background-color: #C8E6C9;
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

    .Wrapper-centre-gray{
        width: 80vw;
        background-color: #EBEBEB;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .Wrapper-centre-lgreen{
        width: 80vw;
        background-color: #C8E6C9;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .Wrapper-centre-green{
        width: 70vw;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>
