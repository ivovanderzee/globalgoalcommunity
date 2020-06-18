<template>
<div id="footer">
    <div id="footer-context">
        <div class="footer-colom">
            <img src="../assets/logoGGC.png">
        </div>
        <div class="footer-colom">
            <p class="bold">17 SDG's</p>
            <ul>
                <li><a href="#">Wat zijn SDG's</a></li>
                <li><a href="/Solutions.vue">Bekijk oplossingen</a></li>
                <li>Tooo</li>
            </ul>
        </div>
        <div class="footer-colom">
            <p class="bold">Community</p>
            <ul>
                <li>Taa</li>
                <li>Melk</li>
                <li>Milk</li>
                <li>Milk</li>
            </ul>
        </div>
        <div class="footer-colom">
            <p class="bold">Over ons</p>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
        <div class="footer-colom">
            <p class="bold">Contact</p>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    </div>
    <div id="footer-line"></div>
</div>
</template>



<style>
    #footer{
        width: 100vw;
        padding-top: 30px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    #footer-context{
        width: 70vw;
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
    }

    #footer-context ul{
        list-style-type: none;
    }

    #footer-context li{
        margin-top: 10px;
    }

    .footer-colom{
        text-align: left;
        width: 10vw;
        padding-bottom: 30px;
    }

    .footer-colom img{
        height: 60px;
    }

    #footer-line{
        background-color: #388E3C;
        width: 100vw;
        padding: 4px;
    }
</style>
