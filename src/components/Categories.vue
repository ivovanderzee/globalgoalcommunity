<template>
    <div class="sdgCategoriesSlider">
      
    <carousel ref="carousel" data-ref="carousel" :loop="true" :spacePadding="20" :per-page="10" :scrollPerPage="false" :paginationEnabled="false" :navigate-to="someLocalProperty" :mouse-drag="true" >
     
    <slide v-for="sdg in sdgs" v-bind:key="sdg.sdg_id">
             <div class="HomeCategories-SDG-icon" :style="{backgroundImage:`url(${sdg.icon})`}"></div>
         
    </slide>
  </carousel>

 <a @click="prevSlide">Prev</a>
     <a @click="nextSlide">Next</a>
  </div>
</template>

<script>
    import { db } from '../main';
    import { Carousel, Slide } from 'vue-carousel';

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
         methods: {
      nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    }
  },
        components: {

            Carousel, 
            Slide

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



.sdgCategoriesSlider{
        padding-top: 30px;
        width: 100vw;
}
  

    .HomeCategories-SDG-icon{
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
     
        opacity: 0.4;
        background-size: 100%;
        border-radius: 10%;
        background-position: center;
        background-color: #8D8D8D;
        background-size: 100%;
        background-repeat: no-repeat;
        -webkit-filter: grayscale(1);
    }

    .HomeCategories-SDG-icon:hover{
        -webkit-filter: grayscale(0);
        opacity: 1;
    }
</style>
