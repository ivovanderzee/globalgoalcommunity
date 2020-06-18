<template>
  <div class="home">
    <Header Text="Over ons" />
    <TextblockLeft
            titleText= "Over GlobalGoalscommunity"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Diam quam nulla porttitor massa id neque aliquam. At elementum eu facilisis sed odio morbi quis commodo odio. Mi quis hendrerit dolor magna eget est. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Gravida arcu ac tortor dignissim convallis aenean et tortor. Congue mauris rhoncus aenean vel. Suspendisse potenti nullam ac tortor vitae. Faucibus turpis in eu mi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eu non diam phasellus vestibulum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo. Commodo nulla facilisi nullam vehicula ipsum. Nulla aliquet porttitor lacus luctus. Egestas maecenas pharetra convallis posuere morbi leo urna. Neque gravida in fermentum et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat diam ut venenatis tellus. Ipsum suspendisse ultrices gravida dictum."
            imageName=homeHeader.jpg
    />

    <TextblockRight
            titleText= "Onze missie en visie"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Diam quam nulla porttitor massa id neque aliquam. At elementum eu facilisis sed odio morbi quis commodo odio. Mi quis hendrerit dolor magna eget est. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Gravida arcu ac tortor dignissim convallis aenean et tortor. Congue mauris rhoncus aenean vel. Suspendisse potenti nullam ac tortor vitae. Faucibus turpis in eu mi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eu non diam phasellus vestibulum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo. Commodo nulla facilisi nullam vehicula ipsum. Nulla aliquet porttitor lacus luctus. Egestas maecenas pharetra convallis posuere morbi leo urna. Neque gravida in fermentum et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat diam ut venenatis tellus. Ipsum suspendisse ultrices gravida dictum."
            imageName=homeHeader.jpg
    />

    <BannerBetween btnText="Naar de vragemuur"/>

    <TextblockLeft
            titleText= "Het bestuur"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Diam quam nulla porttitor massa id neque aliquam. At elementum eu facilisis sed odio morbi quis commodo odio. Mi quis hendrerit dolor magna eget est. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Gravida arcu ac tortor dignissim convallis aenean et tortor. Congue mauris rhoncus aenean vel. Suspendisse potenti nullam ac tortor vitae. Faucibus turpis in eu mi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eu non diam phasellus vestibulum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo. Commodo nulla facilisi nullam vehicula ipsum. Nulla aliquet porttitor lacus luctus. Egestas maecenas pharetra convallis posuere morbi leo urna. Neque gravida in fermentum et. Nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat diam ut venenatis tellus. Ipsum suspendisse ultrices gravida dictum."
            imageName=homeHeader.jpg
    />


    <TextblockRight
            titleText= "Wie financiert de GGC?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Diam quam nulla porttitor massa id neque aliquam. At elementum eu facilisis sed odio morbi quis commodo odio. Mi quis hendrerit dolor magna eget est. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Gravida arcu ac tortor dignissim convallis aenean et tortor. Congue mauris rhoncus aenean vel. Suspendisse potenti nullam ac tortor vitae. Faucibus turpis in eu mi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eu non diam phasellus vestibulum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo. Commodo nulla facilisi nullam vehicula ipsum. Nulla aliquet porttitor lacus luctus. Egestas maecenas pharetra convallis posuere morbi leo urna. "
            imageName=homeHeader.jpg
    />
    <TextblockLeft
            titleText= "Praktische informatie"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Diam quam nulla porttitor massa id neque aliquam. At elementum eu facilisis sed odio morbi quis commodo odio. Mi quis hendrerit dolor magna eget est. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Gravida arcu ac tortor dignissim convallis aenean et tortor. Congue mauris rhoncus aenean vel. Suspendisse potenti nullam ac tortor vitae. Faucibus turpis in eu mi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eu non diam phasellus vestibulum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo. Commodo nulla facilisi nullam vehicula ipsum. Nulla aliquet porttitor lacus luctus. Egestas maecenas pharetra convallis posuere morbi leo urna. Neque gravida in fermentum et. Nulla porttitor massa id neque aliquam vestibulum morbi."
            imageName=homeHeader.jpg
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
    }
  }
</script>