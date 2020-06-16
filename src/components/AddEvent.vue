<template>
    <div class="AddPost"   v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        <p class="bold"> {{message}}<i class="fas fa-plus"></i></p>
    </div>
</template>

<script>
    export default {
        name: 'AddPost',
        el: '#mouse',
        data: function() {
            return {
                message: ''
            };
        },
        methods: {
            mouseover: function(){
                this.message = 'Evenement toevoegen'
            },
            mouseleave: function(){
                this.message = ''
            }
        }
    }

</script>

<style scoped>
    .AddPost{
        background-color: #B9630C;
        width: auto;
        padding: 20px 30px ;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0  40px 40px 0;
        box-shadow: 0 0 10px #a7a7a7;
        position: fixed;
        bottom: 10vh;
        z-index: 10;
    }

    .AddPost i{
        margin-left: 20px;
    }
</style>
