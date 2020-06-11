<template>
    <div :style="cssProps" class="header">
        <p>{{ Text }}</p>
    </div>

</template>
<script>

export default {
    name: 'header',
    props: ['Text'],
    data() {
        return {
            cssProps: {
                backgroundImage: `url(${require('@/assets/extraHeader.jpg')})`,
            }
        }
    }
}
</script>

<style>
    .header{
        width: 100vw;
        padding-top: 22vh;
        padding-bottom: 10vh;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-size: cover;
        background-position: bottom;
    }


    .header p{
        color:white;
        font-weight: bold;
        font-size:7vh;
    }
</style>