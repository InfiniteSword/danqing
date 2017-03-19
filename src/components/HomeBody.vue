<template>
    <div class="body" :style="display?'opacity:1':''">
        <template v-for="item in pics">
            <img-box :url="item.url" :title="item.title" :author="item.author" :tags="item.tags" />
        </template>
    </div>
</template>

<script>

    import pics from '../api/pics';
    import ImgBox from './ImgBox.vue'

    export default {
        components: { ImgBox },
        data: function () {
            return {
                pics: []
            }
        },
        props: ['display'],
        mounted: function () {
            const that = this;
            let load = new Promise(function (resolve) {
                pics.getAll(resolve);
            });
            load.then(function (list) {
                list.map(function (item) {
                    that.pics.push(item);
                });
                console.log(that.pics);
            });

        }
    }

</script>

<style lang="scss">
    .body{
        position: relative;
        width: 100%;
        max-width: 1000px;
        min-width: 800px;
        margin: auto;
        box-sizing: border-box;
        top: 100px;
        opacity: 0;
        font-size: 0;
        transition: opacity .3s;
    }

</style>