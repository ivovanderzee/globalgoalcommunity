<template>
    <div class="Wrapper">
        <div class="Wrapper-centre">
            <div class="PostContent">
                <h1>{{ Title }}</h1>
                <div class="PostContent-info">
                    <p> <i class="fas fa-user-alt"></i> {{ Author }}</p>
                    <p> <i class="fas fa-calendar-minus"></i> {{ Datee }}</p>
                </div>
                <div class="PostContent-content">
                    {{ Content }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'header',
        props: [
            'Title',
            'Author',
            'Datee',
            'Content'
        ],
    }
</script>

<style>
   .PostContent{
       width: 100%;
       height: 70vh;
       display: flex;
       align-items: flex-start;
       flex-direction: column;
       margin-top: 5vw;
   }

    .PostContent h1{
        font-size: 50px;
    }

    .PostContent-info{
        display: flex;
    }

   .PostContent-info p{
       margin-right: 20px ;
   }

    .PostContent-content{
        margin-top: 3vw;
    }
</style>