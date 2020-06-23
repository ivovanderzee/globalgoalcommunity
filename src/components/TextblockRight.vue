<template>
    <div class="Wrapper">
        <div class="Wrapper-centre-lgreen">
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

<style scoped>
    .Wrapper{
        width: 100%;
        height: auto;
        background-color: #C8E6C9;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Wrapper-centre-lgreen{
        width: 80vw;
        background-color: #C8E6C9;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    #TextblockR{
        margin: 10vh;
        display: flex;
        background-color: #C8E6C9;
        color: black;
        justify-content: space-evenly;
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

    @media (max-width: 760px) {
        .ImageR-colom  {
            display: none;
        }
        WrapperR{

        }
    }
</style>