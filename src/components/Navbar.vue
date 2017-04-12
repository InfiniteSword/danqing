<template>
    <div class="header" :style="display?'top:0':''">
        <div class="back header-btn" @click="getBack">热门</div>
        <div class="nav">
            <router-link to="/search">
                <span class="iconfont header-btn__search">&#xe611;</span>
            </router-link>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'navbar',
        data: function () {
            return {

            }
        },
        props: ['display'],
        methods: {
            ...mapMutations({getBack: 'clear'})
        },
    }
</script>

<style lang="scss">
    .header{
        position: relative;
        top: -60px;
        left: 0;
        width: 100%;
        height: 60px;
        background: rgba(255,255,255,.2);
        box-shadow: 0 0 10px 1px #999;
        line-height: 60px;
        transition: top .3s;
        z-index: 100;
    }
    .header-btn{
        display: inline-block;
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
    .nav{
        position: absolute;
        left: 100px;
        top: 0;
    }
    .header-btn__search{
        font-weight: 600;
    }
</style>