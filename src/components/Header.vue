<template>
    <div class="header">
        
        <p>{{ Text }}</p>
    </div>

</template>
<script>

export default {
name: 'header',
props: ['Text']
}
</script>

<style>
    .header{
        width: 100vw;
        padding-top: 20vh;
        padding-bottom: 10vh;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    .header p{
        color:white;
        font-weight: bold;
        font-size:7vh;
    }


</style>