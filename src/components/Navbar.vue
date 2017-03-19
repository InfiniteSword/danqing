<template>
    <div class="header" :style="display?'top:0':''">
        <div class="back header-btn" @click="getBack">返回</div>
        <div class="nav">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data: function () {
            return {

            }
        },
        props: ['display'],
        methods: {
            getBack: function () {
                this.$parent.bgBlur = false;
            }
        },
    }
</script>

<style lang="scss">
    .header{
        position: absolute;
        top: -60px;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 60px;
        background: rgba(255,255,255,.2);
        box-shadow: 0 0 10px 1px #999;
        line-height: 60px;
        transition: top .3s;
    }
    .header-btn{
        text-align: center;
        transition: .3s;
        cursor: pointer;
    }
    .header-btn:hover{
        box-shadow: 0 0 5px 1px #999 inset;
    }
    .back{
        width: 100px;
    }
</style>