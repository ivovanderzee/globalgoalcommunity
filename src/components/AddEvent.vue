<template>
    <div>
        <div v-if="seen">
            <OpenTemplate></OpenTemplate>
        </div>

        <div class="AddPost"  v-on:click="seen = !seen" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <p class="bold"> Add {{message}} <i class="fas fa-plus"></i></p>
        </div>
    </div>
</template>

<script>
    import OpenTemplate from "./OpenTemplate";

    export default {
        name: 'AddEvent',
        el:
            '#mouse',
        components: {
            OpenTemplate,
        },
        data: function() {
            return {
                message: '',
                seen: false,
            }
        },
        methods: {
            mouseover: function(){
                this.message = 'Event'
            },
            mouseleave: function(){
                this.message = ''
            },
            open: function () {
                alert("hallo")
            }
        }
    }
</script>

<style scoped>
    .AddPost{
        background-color: #388E3C;
        opacity: 0.5;
        width: auto;
        width: auto;
        padding: 20px 30px ;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0  40px 40px 0;
        box-shadow: 0 0 10px #a7a7a7;
        position: fixed;
        bottom: 50px;
        z-index: 99998;
    }

    .AddPost i{
        margin-left: 20px;
    }

    .AddPost:hover{
        opacity: 1;
    }
</style>
