<template>
  <div>
    <Header Text="Over ons" />
    <AddPost></AddPost>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import AddPost from "../components/AddPost";


  export default {
    name: 'Login',
    components: {
      Header,
      AddPost
    }}
</script>