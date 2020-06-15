<template>
  <div class="home">
    <HomeHeader msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>
    <Categories msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>
    <HomeFilter></HomeFilter>
    <SolutionBlock msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>
    <ButtonMore></ButtonMore>
<!--    <SearchInitatief msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>-->
    <BannerAddInitatief btnText="Naar de vragemuur"/>
    <AddPost></AddPost>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import Categories from '@/components/Categories.vue'
import SolutionBlock from '@/components/SolutionBlock.vue'
// import SearchInitatief from '@/components/SearchInitatief.vue'
import BannerAddInitatief from '@/components/BannerAddInitatief.vue'
import AddPost from "../components/AddPost";
import ButtonMore from "../components/ButtonMore.vue";
import HomeFilter from "../components/HomeFilter.vue";


export default {
  name: 'Home',
  components: {
    AddPost,
    HomeHeader,
    Categories,
    SolutionBlock,
    // SearchInitatief,
    BannerAddInitatief,
    ButtonMore,
    HomeFilter,
  },
  data (){
    return{
      Posts: []
    }
  },

}
</script>
