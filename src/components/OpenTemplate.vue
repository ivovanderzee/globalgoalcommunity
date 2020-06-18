<template>
    <div class="x">
        <div class="template">
            <div class="template-filter">
                <div class="template-filter-item">
                        <p class="bold">Project template</p>
                        <p>Hoe werkt het?</p>
                        <p>Tips voor een post</p>
                </div>
                <hr>
            </div>

            <div class="template-keuze">
                <div class="template-keuze-items">
                    <div class="template-keuze-item" @click="selected">
                        <i class="fas fa-podcast"></i><p>Podcast</p>
                    </div>
                    <div class="template-keuze-item">
                        <i class="fas fa-photo-video"></i><p>Video</p>
                    </div>
                    <div class="template-keuze-item">
                        <i class="far fa-copy"></i><p>Stappenplan</p>
                    </div>
                    <div class="template-keuze-item">
                        <i class="far fa-sticky-note"></i><p>Blank post</p>
                    </div>
                </div>
                <GreenButton btnText="Ga verder"/>
            </div>
        </div>

        <div class="openTemplate"></div>
    </div>

</template>

<script>
    import GreenButton from "./GreenButton";

    export default {
        name: 'HomeBannerInitatief',
        props: {
            btnText: String
        },
        components: {
            GreenButton
        },
        methods: {
            selected:function () {

            }
        }
    }
</script>

<style scoped>
    hr{
        width: 100%;
    }

    .template{
        height: 650px;
        width: 530px;
        background-color: white;
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
    }

    .template-filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 80%;
        height: 30px;
        margin-bottom: 15px;
    }

    .template-filter-item{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .template-keuze{
        width: 100%;
        height: 520px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap
    }

    .template-keuze-items{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .template-keuze-items i{
        font-size: 30px;
    }

    .template-keuze-items p{
        font-size: 20px;
        margin-top: 10px;
    }

    .template-keuze-item{
        width: 180px;
        height: 200px;
        background-color: white;
        border: 1px solid #dfdfdf;
        margin: 10px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
    }

    .template-keuze-item:hover{
        border: 2px solid #388E3C;
    }

    .openTemplate{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: -1px;
        z-index: 1;
        background-color: black;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>