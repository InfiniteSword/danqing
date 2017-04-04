<template>
    <div class="bg" :style="blur?'filter:blur(120px)':''">
        <div class="bg-info">
            <h3>Elsword-Aisha</h3>
            作者：<span>swd3e2</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'landing',
        data: function () {
            return {

            }
        },
        props: ['blur'],
    }
</script>

<style lang="scss">
    .bg{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 0;
        background: url("../../assets/img/1.jpg");
        background-size: cover;
        transition: filter 1s;
    }
    .bg-info{
        position: absolute;
        top: 20px;
        left: 20px;
        color: #fff;
        display: inline-block;
    }
    .logo{
        position: absolute;
        text-align: center;
        display: inline-block;
        top: 300px;
        width: 100%;
        height: 200px;
        font-size: 100px;
        color: #faf8f9;
        opacity: 0;
    }
    #header-img{
        position: absolute;
        width: 0;
        height: 0;
    }
</style>