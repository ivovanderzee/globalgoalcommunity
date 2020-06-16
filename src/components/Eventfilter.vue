<template>
    <div class="Wrapper">
        <div class="Wrapper-centre">
            <div class="HomeFilter">
                <div class="HomeFilter-item">
                        <p class="bold">Nieuwste evenementen</p>
                        <p>Uitgelicht door anderen</p>
                        <p>Aangeraden door ons</p>
                </div>
                <div>
                    <GreenButton btn-text="Filter"> </GreenButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GreenButton from "./GreenButton";

    export default {
        name: 'BannerBetween',
        props: {
            btnText: String
        },
        components: {
            GreenButton,

        }
    }
</script>

<style>
    .HomeFilter{
        width: 100%;
        height: 4vh;
        margin-bottom: 3vw;
        margin-top: 5vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .HomeFilter-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .HomeFilter-item p{
        margin-right: 50px;
    }
</style>