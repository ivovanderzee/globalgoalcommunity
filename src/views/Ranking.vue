<template>
    <div>
        <Header Text="Ranking" />
        <Rankingcomponent></Rankingcomponent>
        <AddFamily></AddFamily>
        <BannerFamily></BannerFamily>

    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Rankingcomponent from '@/components/Rankingcomponent.vue'
    import AddFamily from "../components/AddFamily";
    import BannerFamily from "../components/BannerFamily";
   


    export default {
        name: 'Question',
        components: {
            AddFamily,
            Header,
            Rankingcomponent,
            BannerFamily,
          
        }}
</script>