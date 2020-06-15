<template>
    <div class="login">
        <p>Log in </p>
        <input  type="text" v-model="email" placeholder="Email"><br>
        <input  type="password" v-model="password" placeholder="Password"><br>
        <button @click="login">log in</button>
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
    .sign-up{
        margin-top: 40px;
    }
    input{
        margin:10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 10px;
        width: 10%;
        cursor:pointer;
    }
</style>