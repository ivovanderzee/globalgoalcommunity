<template>
    <div class="container">
          <div class="sign-up">
              <h1>Maak een nieuw account</h1>
              <input  type="text" v-model="email" placeholder="Email"><br>
              <input  type="password" v-model="password" placeholder="Password"><br>

              <router-link v-bind:to="'/login/'">
                  <p class="Color-white">Ik heb al een account op het GGC platform!</p>
              </router-link>

              <button @click="signUp">Aanmelden</button>
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
        background-color: #dfdfdf;
        width: 100vw;
        height: 40vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sign-up{
        width: 450px;
        text-align: center;
        box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, .15);
        background: #388E3C;
        padding: .75rem 1.5rem 1.5rem;
        box-sizing: border-box;
        border-radius: 10px;
        color: white;
    }

    .sign-up h1{
        margin-top: 30px;
    }

    input{
        margin: 10px 0;
        width: 100%;
        text-align: center;
        padding: 15px;
        box-sizing: border-box;
    }
    Button{
        height: 48px;
        width: auto;
        margin: 2vh 1vh;
        padding: 0 2vw;
        background-color: white;
        border-radius: 7px;
        cursor: pointer;
        border: none;
    }

</style>
