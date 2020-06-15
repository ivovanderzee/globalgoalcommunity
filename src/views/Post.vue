<template>
    <div id="post" v-if="checkId">
<!--        <header-image> </header-image>-->
        <h1> Dit is pagina nummer: {{ $route .params.postId }}</h1>
        <PostContent
                Title="Hier komt de titel van een post"
                Author="Joanne Ye"
                Datee="21-04-2020"
                Content="hier moet de content in de vorm van een podcast / video of tekst en afbeelding"
                PostOthersImage=""
        ></PostContent>
        <PostOthers></PostOthers>
    </div>
</template>

<script>
    // import HeaderImage from '@/components/HeaderImage.vue'
    import PostContent from '@/components/PostContent.vue'
    import PostOthers from '@/components/PostOthers.vue'
    import { db } from '../main'

    export default {
        name: 'Post',
        components: {
            // HeaderImage,
            PostContent,
            PostOthers,
        },  data(){
            return{
                posts: [],
                post: {
                    post_id: null,
                    author: null,
                    title: null,
                    date: null,
                    image: null,
                }
            }
        }, created() {
            db.collection("posts").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    this.posts.push(doc.data());
                })
            })
        },methods: {
            checkId() {
                if (this.posts.post_id < 3){
                    console.log("hallo dit is kleiner dan 3")
                }
            }
        }
    }
</script>

<style scoped>
    #post {

    }
</style>