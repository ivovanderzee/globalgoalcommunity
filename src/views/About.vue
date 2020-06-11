<template>
  <div class="home">
    <Header Text="Over ons" />
    <TextblockLeft
            titleText= "Over GlobalGoalscommunity"
            text="Stichting SDG Nederland faciliteert een groeiende beweging van ruim 800 partijen die allemaal bijdragen aan het behalen van de Duurzame Ontwikkelingsdoelen (SDG’s). Het gaat om bedrijven, maatschappelijke organisaties, jongerengroepen, gemeenten, financiële instellingen, onderwijs- en kennisinstellingen en bewonersinitiatieven. We informeren, activeren en verbinden al die betrokken partijen met als doel de duurzame transitie te versnellen. Dat doen we zowel online als offline. Op deze website vinden leden van het netwerk elkaar binnen de community. SDG Nederland organiseert ook evenementen zoals de SDG Action Day, creëert allianties rond de SDG’s en brengt coalities op de been rond communicatie, financiering en impactberekening van de ontwikkelingsdoelen. Naast het faciliteren van dit professionele netwerk, betrekken we ook een breder publiek bij de doelen. Dat doen we onder meer met de SDG Stedentrip. Met de rubriek Doe Mee! bieden we handvatten om zelf actie te ondernemen.Het bureau van de stichting SDG Nederland bestaat uit zes werknemers met kantoor in het Tropeninstituut (KIT) in Amsterdam."
            imageName=homeHeader.jpg
    />

    <TextblockRight
            titleText= "Over GlobalGoalscommunity"
            text="Stichting SDG Nederland faciliteert een groeiende beweging van ruim 800 partijen die allemaal bijdragen aan het behalen van de Duurzame Ontwikkelingsdoelen (SDG’s). Het gaat om bedrijven, maatschappelijke organisaties, jongerengroepen, gemeenten, financiële instellingen, onderwijs- en kennisinstellingen en bewonersinitiatieven. We informeren, activeren en verbinden al die betrokken partijen met als doel de duurzame transitie te versnellen. Dat doen we zowel online als offline. Op deze website vinden leden van het netwerk elkaar binnen de community. SDG Nederland organiseert ook evenementen zoals de SDG Action Day, creëert allianties rond de SDG’s en brengt coalities op de been rond communicatie, financiering en impactberekening van de ontwikkelingsdoelen. Naast het faciliteren van dit professionele netwerk, betrekken we ook een breder publiek bij de doelen. Dat doen we onder meer met de SDG Stedentrip. Met de rubriek Doe Mee! bieden we handvatten om zelf actie te ondernemen. Het bureau van de stichting SDG Nederland bestaat uit zes werknemers met kantoor in het Tropeninstituut (KIT) in Amsterdam."
            imageName=homeHeader.jpg
    />
  </div>

</template>

<script>
  import Header from '@/components/Header.vue'
  import TextblockLeft from "@/components/TextblockLeft"
  import TextblockRight from "@/components/TextblockRight";


  export default {
    name: 'About',
    components: {
      Header,
      TextblockLeft,
      TextblockRight
    }}
</script>