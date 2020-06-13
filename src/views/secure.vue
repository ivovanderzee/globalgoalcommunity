<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>
    </div>
</template>

<script>

    export default {
        name: 'Secure',
        data() {
            return {};
        }
    }
</script>

<style scoped>
    #secure {
        height: 65vh;
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>