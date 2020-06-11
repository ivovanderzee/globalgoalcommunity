<template>
    <div>
        <Header Text="Vragenmuur" />
        <question-post></question-post>
        <event-questionwall></event-questionwall>
        <AddPost></AddPost>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import QuestionPost from '@/components/QuestionPost.vue'
    import EventQuestionwall from '@/components/EventsQuestionwall.vue'
    import AddPost from "../components/AddPost";

    export default {
        name: 'Question',
        components: {
            AddPost,
            Header,
            QuestionPost,
            EventQuestionwall
        }}
</script>