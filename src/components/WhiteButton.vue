<template>
    <div class="WhiteButton">
        <p>{{ btnText }}</p>
    </div>
</template>

<script>
    export default {
        name: 'WhiteButton',
        props: ['btnText']
        }
</script>

<style scoped>
    .WhiteButton{
        height: 48px;
        width: auto;
        padding: 0 2vw;
        margin: 0 10px;
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: black;
        border-radius: 7px;
    }
</style>
