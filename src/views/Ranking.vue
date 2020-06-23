<template>
    <div>
        <Header Text="Ranking" />
        <Rankingcomponent></Rankingcomponent>
        <ButtonMore></ButtonMore>
        <event-questionwall></event-questionwall>
        <AddFamily></AddFamily>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Rankingcomponent from '@/components/Rankingcomponent.vue'
    import EventQuestionwall from '@/components/EventsQuestionwall.vue'
    import AddFamily from "../components/AddFamily";
    import ButtonMore from "../components/ButtonMore";


    export default {
        name: 'Question',
        components: {
            AddFamily,
            Header,
            Rankingcomponent,
            EventQuestionwall,
            ButtonMore,
        }}
</script>