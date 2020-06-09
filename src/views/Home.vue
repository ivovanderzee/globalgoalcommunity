<template>
  <div class="home">
    <HomeHeader msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>
    <Categories msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>
    <SolutionBlock msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>
    <SearchInitatief msg="Het kennisplatform voor het delen van duurzame SDG oplossingen"/>
    <BannerAddInitatief btnText="Naar de vragemuur"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'
import Categories from '@/components/Categories.vue'
import SolutionBlock from '@/components/SolutionBlock.vue'
import SearchInitatief from '@/components/SearchInitatief.vue'
import BannerAddInitatief from '@/components/BannerAddInitatief.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    Categories,
    SolutionBlock,
    SearchInitatief,
    BannerAddInitatief,
  }
}
</script>
