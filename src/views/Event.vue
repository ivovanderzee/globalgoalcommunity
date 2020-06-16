<template>
    <div>
        <Header Text="Events" />
        <Eventfilter></Eventfilter>
        <AddEvent></AddEvent>
        <Questionobject></Questionobject>
        <BannerAddEvent></BannerAddEvent>
    
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Eventfilter from '@/components/Eventfilter.vue'
    import AddEvent from "../components/AddEvent"
    import BannerAddEvent from '@/components/BannerAddEvent.vue'
    import Questionobject from '@/components/Questionobject.vue'



    export default {
        name: 'Login',
        components: {
            Eventfilter,
            AddEvent,
            BannerAddEvent,
            Header,
            Questionobject,
        }}
</script>