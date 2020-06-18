<template>
    <div>
        <div id="post" v-for="post in posts" v-bind:key="post.post_id">
            <HeaderImage></HeaderImage>
            <PostContent
                    :Title=post.title
                    :Author=post.author
                    :Datee=post.date
                    :Content=post.content
            ></PostContent>

            <PostOthers></PostOthers>
        </div>
    </div>
</template>

<script>
    import HeaderImage from '@/components/HeaderImage.vue'
    import PostContent from '@/components/PostContent.vue'
    import PostOthers from '@/components/PostOthers.vue'
    import { db } from '../main'

    export default {
        name: 'Post',
        components: {
            HeaderImage,
            PostContent,
            PostOthers,
        },
        data(){
            return{
                posts: [],
                post: {
                    post_id: null,
                    author: null,
                    title: null,
                    date: null,
                    image: null,
                    content: null,
                },
            }
        }, created() {
            db.collection("posts").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    if (doc.data().post_id == this.$route.params.postId){
                        this.posts.push(doc.data());
                    }
                })
            })
        }
    }
</script>

<style scoped>
    .header{
        width: 100vw;
        height: 300px;
        background-color: #dfdfdf;
        background-size: cover;
        background-position: bottom;
    }
</style>