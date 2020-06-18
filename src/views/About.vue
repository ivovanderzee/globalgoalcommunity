<template>
  <div class="home">
    <Header Text="Over ons" />
    <TextblockLeft
            titleText= "Over GlobalGoalscommunity"
            text="De Global Goals Community bevordert de beweging van mensen door heel Nederland die willen bijdragen aan het behalen van de Sustainable Development Goals (SDG). Dit zijn initiatieven van bedrijven, maatschappelijke organisaties, jeugdgroepen, gemeenten, financiële instellingen, onderwijs- en kennisinstellingen en bewoners. We informeren, activeren en nemen contact op met alle relevante partijen om de duurzame transitie te versnellen. Op dit platform kunnen zowel niet als wel leden elkaar vinden om zo te werken aan oplossingen voor SDG's.
                  Global Goals Community is een onderdeel van Ecodorp Boekel."
            imageName=Meeting.jpg
    />

    <TextblockRight
            titleText= "Onze missie en visie"
            text="Wij geloven er in dat de jeugd de toekomst heeft en elkaar kan motiveren om de wereld te verbeteren. Met de Sustainable Development Goals (SDG) hopen wij in 2030 een wereld te bereiken die 'fair' is voor iedereen, zowel voor mensen, dieren, water en planten. De gemeenschappelijke taal van de zeventien doelen verbindt ons met elkaar en stelt ons in staat om samen te werken. Door de gemeenschappelijke taal van deze zeventien doelen, kunnen zij dit ons met elkaar en ons in staat stellen om met elkaar samen te werken. Met dit platform hopen wij daarom zowel individuen, als organisaties bijeen te brengen, zodat zij samen met de beste  duurzame oplossingen komen.  "
            imageName=Kas.jpg
    />

    <BannerBetween btnText="Naar de vragemuur"/>

    <TextblockLeft
            titleText= "Het bestuur"
            text="Het bestuur van de Global Goals Community bestaat uit John Doe (voorzitter), Johnny Deo (secretaris) en Jhon Ode (penningsmeester). Het is een non-profit organisatie: de bestuurders ontvangen dan ook geen enkele vergoeding voor hun werk. Het bestuur is bevoegd om de stichting te vertegenwoordigen.  De volledige statuten zijn op te vragen via ................              "
            imageName=ecodorp.JPG
    />


    <TextblockRight
            titleText= "Wie financiert de GGC?"
            text=" (instantie hier) en (instantie hier) financieren zowel Ecodorp Boekel als Global Goals Community. Ook de Europese Unie draagt financieel bij aan de activiteiten van de stichting. "
            imageName=ad.jpg
    />
    <TextblockLeft
            titleText= "Praktische informatie"
            text="Je kunt ook ons lijfelijke SDG huis bezoeken. (Adres) Voor meer informatie of vragen kun ons bereiken op (EMial@Email.email) of bellen met (061234567890)       Stichting Global goals community KvK: 000000 Btw: NL0000000000 IBAN NL000000000000 "
            imageName=huizen_ecdorp.jpg
    />
  </div>

</template>

<script>
  import Header from '@/components/Header.vue'
  import TextblockLeft from "@/components/TextblockLeft"
  import TextblockRight from "@/components/TextblockRight"
  import BannerBetween from '@/components/BannerBetween.vue';


  export default {
    name: 'About',
    components: {
      Header,
      TextblockLeft,
      TextblockRight,
      BannerBetween,
    }}
</script>