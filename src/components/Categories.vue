<template>
    <div class="HomeCategories">
        <div class="HomeCategories-left">
            <div class="HomeCategories-go-left">
                <i class="fas fa-chevron-left"></i>
            </div>
        </div>

        <div class="HomeCategories-SDG-wrapper" v-for="sdg in sdgs" v-bind:key="sdg.sdg_id">
            <div class="HomeCategories-SDG">
                <div class="HomeCategories-SDG-icon"  :style="{backgroundImage:`url(${sdg.icon})`}">
                </div>
<!--                <p>{{ sdg.name }}</p>-->
            </div>
        </div>

        <div class="HomeCategories-right">
            <div class="HomeCategories-go-right">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { db } from '../main'

    export default {
        el: '#example',
        data(){
            return{
                sdgs: [],
                sdg: {
                    sdg_id: null,
                    name: null,
                    icon: null,
                    color: null,
                }
            }
        },
        created() {
            db.collection("sdgs").get().then(querySnapshot => {
                querySnapshot.forEach( (doc) => {
                    this.sdgs.push(doc.data());
                })
            })
        }
    }
</script>

<style scoped>
    .HomeCategories{
        width: 100vw;
        height: 15vh;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .HomeCategories-left, .HomeCategories-right{
        width: 100px;
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 9;
    }

    .HomeCategories-go-left{
        width: 48px;
        height: 48px;
        margin-left: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: white;
    }

    .HomeCategories-left{
        left: 0;
        background-image: linear-gradient(to right, rgb(199, 199, 199), rgba(255,0,0,0));
    }

    .HomeCategories-right{
        right: 0;
        background-image: linear-gradient(to right, rgba(255,0,0,0), rgb(199, 199, 199));
    }

    .HomeCategories-go-right{
        width: 48px;
        height: 48px;
        margin-right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: white;
    }

    .HomeCategories-SDG-wrapper{
        width: 130px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        /*background-color: red;*/
    }

    .HomeCategories-SDG{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .HomeCategories-SDG p{
        margin-top: 10px;
        font-size: 14px;
    }

    .HomeCategories-SDG-icon{
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0 10px;
        opacity: 0.4;
        background-size: 100%;
        background-position: center;
        background-color: #8D8D8D;
        background-repeat: no-repeat;
        -webkit-filter: grayscale(1);
    }

    .HomeCategories-SDG-icon:hover{
        -webkit-filter: grayscale(0);
        opacity: 1;
    }
</style>
