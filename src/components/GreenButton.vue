<template>
    <div class="GreenButton">
        <p>{{ btnText }}</p>
    </div>
</template>

<script>
    export default {
        name: 'GreenButton',
        props: ['btnText']
    }
</script>

<style scoped>
    .GreenButton{
        height: 48px;
        width: auto;
        margin: 0 10px;
        padding: 0 2vw;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: white;
        border-radius: 7px;
    }
</style>
