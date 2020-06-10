<template>
    <div class="Wrapper">
        <div class="Wrapper-centre">
            <div class="QuestionPost">
                <div class="QuestionPost-image">Image </div>
                <div  class="QuestionPost-text">
                    <h2>welkom op het global goals community </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                    <div class="QuestionPost-text-info">
                        <p><span class="bold">Tags:</span> <span class="Color-green">Hallo, Welcome</span></p>
                        <p><span class="Color-gray">8 weken geleden | laatste reageersel 2 weken geleden </span> </p>
                    </div>

                </div>
                <div class="QuestionPost-button">
                    <GreenButton btnText="Reageren"/>
                    <p><span class="bold">99</span> reageersels</p>
                </div>
            </div>

            <div class="QuestionPost">
                <div class="QuestionPost-image">Image </div>
                <div  class="QuestionPost-text">
                    <h2>welkom op het global goals community </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                    <div class="QuestionPost-text-info">
                        <p><span class="bold">Tags:</span> <span class="Color-green">Hallo, Welcome</span></p>
                        <p><span class="Color-gray">8 weken geleden | laatste reageersel 2 weken geleden </span> </p>
                    </div>

                </div>
                <div class="QuestionPost-button">
                    <GreenButton btnText="Reageren"/>
                    <p><span class="bold">99</span> reageersels</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GreenButton from "./GreenButton";

    export default {
        name: 'QuestionPost',
        props: {
            btnText: String
        },
        components: {
            GreenButton
        }
    }
</script>

<style scoped>
    .QuestionPost{
        height: 100px;
        width: auto;
        padding: 20px;
        background-color: white;
        box-shadow: 0 2px 10px #efefef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        border-radius: 10px;
        margin-top: 2vw;
    }

    .QuestionPost-text{
        width: 45vw;
    }

    .QuestionPost-text p{
        margin-top: 5px;
    }

    .QuestionPost-text-info{
        width: 600px;
        display: flex;
        justify-content: space-between;
    }

    .QuestionPost-image{
        width: 200px;
        background-color: #dfdfdf;
        height: 100%;
    }

    .QuestionPost-button{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .QuestionPost-button p{
       margin-top: 10px;
    }
</style>
