<template>
    <div id="TextblockR">
        <div id="TextR-context">



            </div>
        <div id="TextR-context">

            <div class="TextR-colom">
                <H2 class="bold">{{ titleText }}</H2>
                <br>
                <p>{{ Text }}</p>


            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextblockR',
        props: {
            imageUrl: String,
            Text: String,
            titleText: String
        }
    }
</script>



<style>
    #TextblockR{
        width: 100vw;
        text-color:white;
        padding-top: 30px;
        background-color: #388E3C;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    #TextR-context{
        width: 70vw;
        margin: 7vh;
        justify-content: space-evenly;
        list-style-type: none;
    }

    .TextR-colom{
        text-align: Right;
        width: 37vw;
        padding-bottom: 30px;
    }

    .TextR-colom img{
        height: 60px;
    }


</style>