<template>
    <div class="container" >
        <div class="adminlogin">
            <h1>Admin login</h1>
            <input  type="text" v-model="email" placeholder="Email"><br>
            <input  type="password" v-model="password" placeholder="Password"><br>

            <button @click="adminlogin">Login</button>

        </div>
    </div>
</template>
<script>
    import firebase from 'firebase';
    export default {
        name: 'adminlogin',
        data() {
            return{
                email:'',
                password:''
            }

        },
        methods: {
            adminlogin:function () {
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
        background-color: #dfdfdf;
        width: 100vw;
        height: 40vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .adminlogin{
        width: 450px;
        text-align: center;
        box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, .15);
        background: white;
        padding: .75rem 1.5rem 1.5rem;
        box-sizing: border-box;
        border-radius: 10px;
    }

    .adminlogin h1{
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
        margin: 2vh 1vh ;
        padding: 0 2vw;
        background-color: #388E3C;
        color: white;
        border-radius: 7px;
        border: none;
        cursor: pointer;
    }
</style>