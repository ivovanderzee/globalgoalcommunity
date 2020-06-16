<template>
    <div>
        <Header Text="Vragenmuur" />
        <question-post></question-post>
        <ButtonMore></ButtonMore>
        <event-questionwall></event-questionwall>
        <AddQuestion></AddQuestion>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import QuestionPost from '@/components/QuestionPost.vue'
    import EventQuestionwall from '@/components/EventsQuestionwall.vue'
    import AddQuestion from "../components/AddQuestion";
    import ButtonMore from "../components/ButtonMore";


    export default {
        name: 'Question',
        components: {
            AddQuestion,
            Header,
            QuestionPost,
            EventQuestionwall,
            ButtonMore,
        }}
</script>