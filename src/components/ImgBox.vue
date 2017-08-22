<template>
    <div class="img-ctn">
        <div class="img-box" :style="'background:url('+url+');background-size: cover;'">
            <div class="img-info">
                <h3>
                    <router-link :to="{ name: 'work', params: { workId: workId }}">
                        {{title}}
                    </router-link>
                </h3>
                作者：<span><router-link :to="{ name: 'user', params: { userId: userId }}">{{author}}</router-link></span>
                <br>
                tags：<span v-for="item in tags"> {{item}} </span>
                <span @click="magnify" class="iconfont img-magnify">&#xe653;</span>
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
        props: ['url','title','author','tags', 'userId', 'workId'],
        methods: {
            magnify: function () {
                this.$parent.picMagnified.src = this.url;
                this.$parent.picMagnified.title = this.title;
                this.$parent.magnifying = true;
            }
        }
    }

</script>

<style lang="scss">
    .img-ctn{
        display: inline-block;
        width: 33.333333%;
        text-align: center;
        padding: 30px 0;
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
        top: 50px;
        left: 0;
        opacity: 0;
        font-size: 16px;
        width: 260px;
        height: 180px;
        padding: 20px;
        box-sizing: border-box;
        line-height: 36px;
        color: #faf8f9;
        background: rgba(0,0,0,.5);
        transition: top .3s, opacity .3s;
    }
    .img-box:hover{
        box-shadow: 0 0 5px 1px #fff;
    }
    .img-box:hover > .img-info{
        top: 0;
        opacity: 1;
    }
    .img-magnify{
        position: absolute;
        right: 10px;
        bottom: 0;
        cursor: pointer;
    }


</style>
