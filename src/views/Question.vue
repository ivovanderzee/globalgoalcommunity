<template>
    <div>
        <Header Text="Vragenmuur" />
        <question-post></question-post>
        <event-questionwall></event-questionwall>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import QuestionPost from '@/components/QuestionPost.vue'
    import EventQuestionwall from '@/components/EventsQuestionwall.vue'

    export default {
        name: 'Login',
        components: {
            Header,
            QuestionPost,
            EventQuestionwall
        }}
</script>