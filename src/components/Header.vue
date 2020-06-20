<template>
    <div :style="cssProps" class="header">
        <h1>{{ Text }}</h1>
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

<style scoped>
    .header{
        width: 100vw;
        height: 300px;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-size: cover;
        background-position: bottom;
    }


    .header h1{
        color: white;
        font-size: 70px;
    }
</style>