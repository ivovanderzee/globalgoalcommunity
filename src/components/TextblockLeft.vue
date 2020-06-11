<template>
    <div class="Wrapper">
        <div class="Wrapper-centre">
            <div id="Textblock">
                <div class="Image-colom">
                    <img :src="require('@/assets/' + imageName + '')" />
                </div>
                <div class="Text-colom">
                    <H2 class="bold">{{ titleText }}</H2>
                    <br>
                    <p>{{ Text }}</p>
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
        justify-content: center;
        align-items: center;
        height: 300px;
    }
</style>