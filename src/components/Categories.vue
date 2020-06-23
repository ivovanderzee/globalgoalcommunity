<template>
    <div class="sdgCategoriesSlider">
        <div class="buttonWrapper">

        <div @click="prevSlide" id="buttonLeft">
        <i  class="fas fa-chevron-left fa-lg"></i>
        </div>

        <div @click="nextSlide" id="buttonRight">
        <i  class="fas fa-chevron-right fa-lg"></i>
        </div>
      
        </div>
   
<<<<<<< HEAD
    <carousel ref="carousel" data-ref="carousel" :loop="true" :spacePadding="20" :per-page="10" :scrollPerPage="false" :paginationEnabled="false" :navigate-to="someLocalProperty" :mouse-drag="true" >
     
 

    <slide class="sdgItem" v-for="sdg in sdgs" v-bind:key="sdg.sdg_id">
             <div class="HomeCategories-SDG-icon" :class="{active : activeIcon == sdg.sdg_id}" :style="{backgroundImage:`url(${sdg.icon})`}"></div>
         
    </slide>
  </carousel>

  
  
  </div>
=======
        <carousel ref="carousel" data-ref="carousel" :loop="true" :spacePadding="20" :per-page="10" :scrollPerPage="false" :paginationEnabled="false" :navigate-to="someLocalProperty" :mouse-drag="true" >
            <slide class="sdgItem" v-for="sdg in sdgs" v-bind:key="sdg.sdg_id">
                     <div class="HomeCategories-SDG-icon" :style="{backgroundImage:`url(${sdg.icon})`}"></div>
            </slide>
        </carousel>
    </div>
>>>>>>> 920fa8f538055ca741a902bead0d971764b7af42
</template>

<script>
    import { db } from '../main';
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        el: '#example',
        data(){
            return{
                activeIcon: 0,
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

.activeStateIcon{
    
}

.sdgCategoriesSlider{
        margin-top: 30px;
        width: 100vw;
        height: 100%;
        vertical-align: center;
        position: relative;
}

.fa-chevron-right{
    display: table-cell;
  vertical-align: middle;
   

}

.fa-chevron-left{
  background-size: 400%;
  display: table-cell;
  vertical-align: middle;

}

.buttonWrapper{
 
position: absolute;
width: 100vw;
z-index: 10;
visibility: hidden;

}

#buttonLeft{
    display: table;
    top: 50%;
    bottom: 50%;
visibility: visible;
    float: left;
    left: 0;
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    height: 80px;
    z-index: 10;
    color: #42925D;
   margin: auto;
    width: 5vw;
    
}
#buttonRight{
    visibility: visible;
    display: table;
    top: 50%;
    bottom: 50%;
    margin: auto;
    float: right;
    right: 0;
    background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); 
     height: 80px;
    z-index: 10;
    color: #42925D;
    width: 5vw;
   
}

    .HomeCategories-SDG-icon{
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
     
        opacity: 0.2;
        background-size: 100%;
        border-radius: 10%;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
     
    }

    .HomeCategories-SDG-icon:hover{
        -webkit-filter: grayscale(0);
        opacity: 1;
    }
</style>
