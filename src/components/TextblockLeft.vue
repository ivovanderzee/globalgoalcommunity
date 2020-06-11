<template>
    <div id="Textblock">
        <div id="Text-context">

            <div class="Text-colom">
                <H2 class="bold">{{ titleText }}</H2>
                <br>
                <p>{{ Text }}</p>
                </div>
            </div>
        <div class="Text-colom">
            <img class="left.pic" src="img" />
    </div>



    </div>
</template>

<script>
    export default {
        name: 'Textblock',
        props: ['titleText', 'Text', 'img']
    }
</script>



<style>
    #Textblock{
        width: 100vw;
        padding-top: 30px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    #Text-context{
        width: 70vw;
        margin: 7vh;
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
    }

    .Text-colom{
        text-align: left;
        width: 37vw;
        padding-bottom: 30px;
    }

    .left.left.pic img{
        height: 60px;
    }


</style>