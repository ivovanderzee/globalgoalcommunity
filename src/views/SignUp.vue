<template>
    <div class="container">
          <div class="sign-up">
              <h1>Maak een nieuw account!</h1>
              <input  type="text" v-model="email" placeholder="Email"><br>
              <input  type="password" v-model="password" placeholder="Password"><br>
              <button @click="signUp">Sign Up</button>
          </div>
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
    .container {
        background: none;
        width: 400px;
        margin: 10rem auto 0;
        text-align: center;
        box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, .15);
        position: relative;
    }

    .sign-up{
        z-index: 1;
        position: relative;
        color: white;
        margin-bottom:10vh;
        background: #388E3C;
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
        background-color: white;
        color: #388E3C;
        border-radius: 7px;
        cursor: pointer;
    }

</style>
