<template>
    <div class="HomeCategories">
        <div class="HomeCategories-left">
            <div class="HomeCategories-go-left">
                <i class="fas fa-chevron-left"></i>
            </div>
        </div>

        <div class="HomeCategories-icon">
            <div class="HomeCategories-SDG">
                x
            </div>

            <div class="HomeCategories-SDG">
                x
            </div>

            <div class="HomeCategories-SDG">
                x
            </div>

            <div class="HomeCategories-SDG">
                x
            </div>

            <div class="HomeCategories-SDG">
                x
            </div>
        </div>

        <div class="HomeCategories-right">
            <div class="HomeCategories-go-right">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Categories',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .HomeCategories{
        position: relative;
    }

    .HomeCategories-left{
        width: 100px;
        height: 10vh;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-image: linear-gradient(to right, rgb(199, 199, 199), rgba(255,0,0,0));
    }

    .HomeCategories-go-left{
        width: 48px;
        height: 48px;
        margin-left: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: white;
    }

    .HomeCategories-right{
        width: 100px;
        height: 10vh;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-image: linear-gradient(to right, rgba(255,0,0,0),  rgb(199, 199, 199));
    }

    .HomeCategories-go-right{
        width: 48px;
        height: 48px;
        margin-right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: white;
    }

    .HomeCategories-icon{
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .HomeCategories-SDG{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #8D8D8D;
        opacity: 0.4;
        margin: 0 10px;
    }

    .HomeCategories-SDG:hover{
        opacity: 1;
    }
</style>
