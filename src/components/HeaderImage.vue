<template>
<!--    <div :style="cssProps" class="headerImage"></div>-->
    <div class="headerImage">
        {{ Header }}
    </div>
</template>
<script>
    export default {
        name: 'header',
        props: [
            'Text',
            'Header',
        ],
        data() {
            return {
                cssProps: {
                    backgroundImage: `url(${require('@/assets/logoGGC.png')})`,
                },
            }
        }
    }
</script>

<style>
    .headerImage{
        width: 100vw;
        height: 300px;
        background-color: #cdcdcd;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-size: cover;
        background-position: center;
    }
</style>