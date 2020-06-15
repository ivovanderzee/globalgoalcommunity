<template>
    <div class="dashboard">
        <BannerAddInitatief btnText="Naar de vragemuur"/>
        <button @click="logout">Log uit</button>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import BannerAddInitatief from '@/components/BannerAddInitatief.vue'

    export default {
        name:'dashboard',
        components:{
            BannerAddInitatief,
    },
        methods:{
            logout: function(){
                firebase.auth().signOut().then(()=>{
                    this.$router.replace('login')
                })
            }
        }
    }
</script>