<template>
    <div class="dashboard">
        <Header Text="Welkom Admin!" />
        <Button @click="logout">Log uit</Button>
        <SolutionBlock msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>

    </div>
</template>

<script>
    import firebase from 'firebase';
    import Header from '@/components/Header.vue'
    import SolutionBlock from '@/components/SolutionBlock.vue'

    export default {
        name:'dashboardadmin',
        components:{
            Header,
            SolutionBlock,


    },
        methods:{
            logout: function(){
                firebase.auth().signOut().then(()=>{
                    this.$router.replace('adminlogin')
                })
            }
        }
    }
</script>

<style scoped>
    .dashboard{
        text-align: center;

    }
    Button{
        height: 48px;
        width: auto;
        margin:3vh;
        padding: 0 2vw;
        background-color: #388E3C;
        color: white;
        border-radius: 7px;
    }
</style>