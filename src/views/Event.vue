<template>
    <div>
        <Header Text="Events" />
        <AddPost></AddPost>
        <Questionobject></Questionobject>
        <BannerAddEvent></BannerAddEvent>
    
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import AddPost from "../components/AddPost"
    import BannerAddEvent from '@/components/BannerAddEvent.vue'
    import Questionobject from '@/components/Questionobject.vue'



    export default {
        name: 'Login',
        components: {
            AddPost,
            BannerAddEvent,
            Header,
            Questionobject,
        }}
</script>