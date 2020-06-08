<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">Over ons</router-link> |
            <router-link to="/event">Event</router-link> |
            <router-link to="/solution">Oplossingen</router-link> |
            <router-link to="/question">Vragenmuur</router-link> |
            <router-link to="/login">Login </router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />

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
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
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

    #nav {
        padding: 20px;
        position: fixed;
        width: 100%;
        background-color: white;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .color-green{
        color:  #388E3C;
    }

    .button{
        height: 48px;
        width: 100px;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: white;
        border-radius: 7px;
    }

    .wrapper{
        width: 100vw;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper-gray{
        width: 100vw;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper-lgreen{
        width: 100vw;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper-centre{
        width: 80vw;
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .wrapper-centre-gray{
        width: 80vw;
        background-color: #dfdfdf;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .wrapper-centre-lgreen{
        width: 80vw;
        background-color: #C8E6C9;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }


</style>
