<template>
  <div class="sign-up">
      <p>Maak een nieuw account!</p>
      <input  type="text" v-model="email" placeholder="Email"><br>
      <input  type="password" v-model="password" placeholder="Password"><br>
      <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name:'signUp',
        data() {
               return{
                   email:'',
                   password:''
               }
        },
        methods:{
            signUp:function () {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(function () {
                    alert('Your account has been created !')
                },
                    function (err) {alert('Oops.' + err.message)
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
