<template>
    <div class="container" >
    <div class="login">
        <h1>Log in </h1>
        <input  type="text" v-model="email" placeholder="Email"><br>
        <input  type="password" v-model="password" placeholder="Password"><br>
        <button @click="login">log in</button>
        
  <button href= "DasboardAdmin.vue" >Admin</button>

    </div>
    </div>


</template>
<script>
    import firebase from 'firebase';
    export default {
        name: 'login',
        data() {
        return{
            email:'',
            password:''
        }

        },
        methods: {
            login:function () {
               firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                   function () {
                       alert('Je bent nu ingelogd')
                   },
                   function (err) {
                       alert('Oeps. ' + err.message)

                   }
               );
            }
        }
    }
</script>
<style scoped>

    .container {
        background: none;
        width: 400px;
        margin: 10rem auto 0;
        text-align: center;
        box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, .15);
        position: relative;
    }

    .login{
        z-index: 1;
        position: relative;
        margin-bottom:10vh;
        background: white;
        padding: .75rem 1.5rem 1.5rem;
        box-sizing: border-box;
    }
    input{
        margin: 20px 0;
        width: 100%;
        text-align: center;
        padding: 15px;
        box-sizing: border-box;
    }
    Button{
        height: 48px;
        width: auto;
        margin:3vh;
        padding: 0 2vw;
        background-color: #388E3C;
        color: white;
        border-radius: 7px;
        cursor: pointer;
    }
</style>