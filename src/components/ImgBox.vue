<template>
    <div class="img-ctn">
        <div class="img-box" :style="'background:url('+url+');background-size: cover;'">
            <div class="img-info">
                <h3>{{title}}</h3>
                作者：<span>{{author}}</span>
                <br>
                tags：<span v-for="item in tags">{{item}} </span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ImgBox',
        data: function () {
            return {

            }
        },
        props: ['url','title','author','tags'],
    }

</script>

<style style="scss">
    .img-ctn{
        display: inline-block;
        width: 33.333333%;
        text-align: center;
    }
    .img-box{
        position: relative;
        width: 260px;
        height: 180px;
        display: inline-block;
        z-index: 20;
        border: 1px #fff solid;
        border-radius: 5px;
        overflow: hidden;
        transition: box-shadow .3s;
    }
    .img-info{
        position: absolute;
        display: inline-block;
        left: 100px;
        opacity: 0;
        font-size: 16px;
        width: 260px;
        height: 180px;
        padding: 20px;
        box-sizing: border-box;
        line-height: 36px;
        color: #faf8f9;
        background: rgba(0,0,0,.5);
        transition: left .3s, opacity .3s;
    }
    .img-box:hover{
        box-shadow: 0 0 5px 1px #fff;
    }
    .img-box:hover > .img-info{
        left: 0;
        opacity: 1;
    }

</style>
