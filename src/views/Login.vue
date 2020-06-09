<template>

    <div id="login">

            <div id="formContent">
                <!-- Tabs Titles -->
                <h2> Log in</h2>

                <!-- Login Form -->
                <form>
                    <input type="text" name="username" v-model="input.username" placeholder="Username" />
                    <input type="password" name="password" v-model="input.password" placeholder="Password" />
                    <button type="button" v-on:click="login()">Login</button>
                </form>


            </div>
        <Footer />
        </div>
</template>
<script>


    export default {
        name: 'Login',
        components: {

        },
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if (this.input.username != "" && this.input.password != "") {
                    if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({name: "secure"});
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }}

</script>
<style scoped>
    a {
        color: #92badd;
        display:inline-block;
        text-decoration: none;
        font-weight: 400;
    }

    h2 {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-weight: bold;
        text-align: center;
        font-size: 190%;
        font-weight: 600;
        display:inline-block;
        margin: 40px 8px 10px 8px;
        color: #388E3C;
    }



    /* STRUCTURE */

    #login {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        min-height: 100%;
        padding: 20px;

    }

    button{
        height: 48px;
        width: auto;
        margin:20px;
        padding: 0 2vw;
        background-color: #388E3C;
        color: white;
        border-radius: 7px;

    }
    #formContent {
        -webkit-border-radius: 10px 10px 10px 10px;
        border-radius: 10px 10px 10px 10px;
        background: #fff;
        padding: 30px;
        width: 90%;
        margin:5%;
        max-width: 650px;
        position: relative;
        padding: 0px;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        text-align: center;
    }


    /* FORM TYPOGRAPHY*/

    input[type=text],input[type=password] {
        background-color: #f6f6f6;
        border: none;
        color: #0d0d0d;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 5px;
        width: 85%;
        border: 2px solid #f6f6f6;
        -webkit-border-radius: 5px 5px 5px 5px;
        border-radius: 5px 5px 5px 5px;
    }

    input[type=text]:focus {
        background-color: #fff;
        border-bottom: 2px solid #5fbae9;
    }

</style>