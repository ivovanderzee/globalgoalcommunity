<template>
    <div :style="cssProps" class="header"></div>
</template>
<script>
    export default {
        name: 'header',
        props: [
            'HeaderImage',

        ],
        data() {
            return {
                cssProps: {
                    //hier moet de databse image inladen in de vorm van {{HeaderImage}}
                    backgroundImage: `url(${require('@/assets/')})`,
                }
            }
        }
    }
</script>

<style>
    .header{
        width: 100vw;
        height: 300px;
        background-color: #dfdfdf;
        background-size: cover;
        background-position: bottom;
    }
</style>