<template>

<div class="wrapper">
    <div class="arrow">
     
<svg width="40px" height="22px" viewBox="0 0 40 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Combined Shape</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Custom-Preset-4" transform="translate(-230.000000, -235.000000)" fill="#ffffff">
            <path d="M234.266441,235.714618 L250.008,251.146 L265.733559,235.731673 C266.671842,234.81183 268.149083,
            234.771658 269.13444,235.611287 L269.265661,235.731235 C269.277257,235.742597 269.288738,
            235.754075 269.300103,235.765668 C270.23716,236.721509 270.221933,238.256007 269.266091,
            239.193065 L269.266091,239.193065 L251.831145,256.285382 C251.244395,256.860601 250.446882,257.091819 249.690694,
            256.979006 C249.136436,256.92422 248.596632,256.687697 248.168855,256.268327 L230.733909,239.17601 C229.778067,238.238952 229.76284,
            236.704454 230.699897,235.748612 C230.711262,235.73702 230.722743,235.725542 230.734339,235.71418 C231.715509,
            234.752768 233.285509,234.752963 234.266441,235.714618 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>

    </div>
    Scroll naar beneden

    </div>
</template>

<script>
    export default {
        name: 'BouncingArrow'
    }
</script>


<style scoped>

.wrapper{
    color: white;
    font-family: font2;
}

.arrow{
     -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
    margin-bottom: 15px;

    
    
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0); }
  40% {
    -webkit-transform: translateY(-30px); }
  60% {
    -webkit-transform: translateY(-15px); } }
@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
 -moz-transform: translateY(0); }
  40% {
    -moz-transform: translateY(-30px); }
  60% {
    -moz-transform: translateY(-15px); } }
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0); }
  40% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px); }
  60% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px); } }

</style>
