<template>
    <div>
        <Header Text="Events" />
        <AddPost></AddPost>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import AddPost from "../components/AddPost";


    export default {
        name: 'Login',
        components: {
            AddPost,
            Header,
        }}
</script>