<template>
    <div class="login">
        <h1>This is an login page</h1>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>
<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        }
    }
</script>
