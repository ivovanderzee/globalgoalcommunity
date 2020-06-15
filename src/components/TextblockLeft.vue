<template>
    <div class="Wrapper">
        <div class="Wrapper-centre">
            <div id="Textblock">
                <div class="Text-colom">
                    <H2 class="bold">{{ titleText }}</H2>
                    <br>
                    <p>{{ Text }}</p>
                </div>
                <div class="Image-colomn">
                    <img :src="require('@/assets/' + imageName + '')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextblockL',
        props:[
            'titleText',
            'Text',
            'imageName'
        ]
    }
</script>

<style>
    .Wrapper{
        width: 100vw;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #Textblock{
        width: 100%;
        margin: 10vh;
        display: flex;
        background-color: white;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .Text-colom{
        margin: 40px 0;
        text-align: left;
        width: 50%;
    }

    .Image-colomn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Image-colomn img{
        display: flex;
        width: 80%;
        justify-content: center;
        align-items: center;
        height: auto;
    }
</style>