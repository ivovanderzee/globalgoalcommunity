<template>
    <div>
        <div v-if="seen">
            <OpenTemplate></OpenTemplate>
        </div>

        <div class="AddPost"  v-on:click="seen = !seen" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <p class="bold"> {{message}}<i class="fas fa-plus"></i></p>
        </div>
    </div>
</template>

<script>
    import OpenTemplate from "./OpenTemplate";

    export default {
        name: 'AddPost',
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
                this.message = 'Oplossing uploaden'
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
        z-index: 99998;
    }

    .AddPost i{
        margin-left: 20px;
    }
</style>
