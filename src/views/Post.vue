<template>
    <div id="post">
        <header-image> </header-image>
        <PostContent
                Title="Hier komt de titel van een post"
                Author="Joanne Ye"
                Datee="23-04-2020"
                Content="hier moet de content in de vorm van een podcast / video of tekst en afbeelding"
                PostOthersImage=""
        ></PostContent>
        <PostOthers>
            x
        </PostOthers>
    </div>
</template>

<script>
    import HeaderImage from '@/components/HeaderImage.vue'
    import PostContent from '@/components/PostContent.vue'
    import PostOthers from '@/components/PostOthers.vue'

    export default {
        name: 'Post',
        components: {
            HeaderImage,
            PostContent,
            PostOthers,
            // PostReaction,
        }
    }
</script>

<style scoped>
    #post {

    }
</style>