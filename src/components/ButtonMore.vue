<template>
    <div class="Wrapper">
        <div class="Wrapper-centre">
            <div class="ButtonMore">
                <div class="ButtonMore">
                    <i class="fas fa-chevron-left"></i>

                    <div class="ButtonMore-item">
                        <p>1</p>
                    </div>

                    <div class="ButtonMore-item2">
                        <p>2</p>
                    </div>

                    <div class="ButtonMore-item2">
                        <p>3</p>
                    </div>

                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .ButtonMore{
        margin: 5vh 0;
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ButtonMore i{
        color: #388E3C;
    }

    .ButtonMore-item{
        margin: 0 10px ;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #388E3C;
    }

    .ButtonMore-item2{
        margin: 0 10px ;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        /*background-color: #dfdfdf;*/
    }
</style>