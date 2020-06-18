<template>
    <div>
        <Header Text="Ranking" />
        <question-post></question-post>
        <ButtonMore></ButtonMore>
        <event-questionwall></event-questionwall>
        <AddFamily></AddFamily>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import QuestionPost from '@/components/QuestionPost.vue'
    import EventQuestionwall from '@/components/EventsQuestionwall.vue'
    import AddFamily from "../components/AddFamily";
    import ButtonMore from "../components/ButtonMore";


    export default {
        name: 'Question',
        components: {
            AddFamily,
            Header,
            QuestionPost,
            EventQuestionwall,
            ButtonMore,
        }}
</script>