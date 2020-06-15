<template>
    <div class="Wrapper">
        <div class="Wrapper-centre">
            <div id="Textblock">
                <div class="Text-colom">
                    <H2 class="bold">{{ titleText }}</H2>
                    <br>
                    <p>{{ Text }}</p>
                </div>
                <div class="Image-colom">
                    <img :src="require('@/assets/' + imageName + '')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Textblock',
        props:[
            'titleText',
            'Text',
            'imageName'
        ]
    }
</script>

<style>
    #Textblock{
        width: 100%;
        margin: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .Text-colom{
        margin: 40px 0;
        text-align: left;
        width: 50%;
    }

    .Image-colom {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Image-colom img{
        display: flex;
        width: 100%;
        padding-left: 30%;
        justify-content: center;
        align-items: center;
        height: auto;
    }
</style>