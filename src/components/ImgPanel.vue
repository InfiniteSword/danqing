<template>
    <div class="body" :style="{ 'opacity' : opacity , 'display' : display}">
        <template v-for="item in pics">
            <img-box :url="item.url" :title="item.title" :author="item.author" :tags="item.tags" :workId="item.picId" :userId="item.userId" />
        </template>
        <magnifier :style="{ 'opacity' : magnifier.opacity , 'display' : magnifier.display , 'transition' : '.3s'}" :pic="picMagnified" />
    </div>
</template>

<script>

import pics from '../api/pics';
import ImgBox from './ImgBox.vue'
import Magnifier from './Magnifier.vue'

import { mapState, mapMutations } from 'vuex'

export default {
    components: { ImgBox, Magnifier },
    data: function () {
        return {
            pics: [],
            opacity: 0,
            display: 'none',
            picMagnified: {
                src: '',
                title: ''
            },
            magnifying: false,
            magnifier: {
                opacity: 0,
                display: 'none'
            }
        }
    },
    computed: {
        ...mapState({
            flag: state => state.bgMode.blurred
        })
    },
    mounted: function () {
        const that = this;
        let load = new Promise(function (resolve) {
            pics.getAll(resolve);
        });
        load.then(function (list) {
            list.map(function (item) {
                that.pics.push(item);
            });
            that.checkFlag(that.flag);
        });
    },
    methods: {
        checkFlag(v) {
            var that = this;
            if (v === true) {
                this.display = 'block';
                setTimeout(function () {
                    that.opacity = 1;
                }, 100)
            } else {
                this.opacity = 0;
                setTimeout(function () {
                    that.display = 'none';
                }, 300)
            }
        }
    },
    watch: {
        flag: function (v) {
            this.checkFlag(v);
        },
        magnifying: function (v) {
            var that = this;
            if (v === true) {
                this.magnifier.display = 'block';
                setTimeout(function () {
                    that.magnifier.opacity = 1;
                }, 100)
            } else {
                this.magnifier.opacity = 0;
                setTimeout(function () {
                    that.magnifier.display = 'none';
                }, 300)
            }
        }
    }

}

</script>

<style lang="scss">
.body {
    position: relative;
    width: 100%;
    max-width: 1000px;
    min-width: 800px;
    margin: auto;
    box-sizing: border-box;
    top: 0;
    opacity: 0;
    display: none;
    transition: opacity .6s;
}
</style>