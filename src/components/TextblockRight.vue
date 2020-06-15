<template>
    <div class="WrapperR">
        <div class="Wrapper-centre-green">
            <div id="TextblockR">
                <div class="ImageR-colom">
                    <img :src="require('@/assets/' + imageName + '')" />
                </div>
                <div class="TextR-colom">
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
        name: 'TextblocR',
        props:[
            'titleText',
            'Text',
            'imageName'
        ]
    }
</script>

<style>
    .WrapperR{
        width: 100vw;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #TextblockR{
        width: 100%;
        margin: 10vh;
        display: flex;
        background-color: #388E3C;
        color:White;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .TextR-colom{
        margin: 40px 0;
        text-align: left;
        width: 50%;
    }

    .ImageR-colom {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ImageR-colom img{
        display: flex;
        width: 95%;
        padding-right: 20%;
        justify-content: center;
        align-items: center;
        height: auto;
    }
</style>