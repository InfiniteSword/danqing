<template>
    <div @click="picClose" class="origin-ctn">
        <img @load="picLoaded" :width="width" :height="height" :src="pic.src" :alt="pic.title" :title="pic.title" >
    </div>
</template>

<script>
    export default {
        name: 'origin-pic',
        props: ['pic'],
        data: function () {
            return {
                width: '',
                height: ''
            }
        },
        methods: {
            picLoaded: function (e) {
                var height = e.target.naturalHeight,
                    width = e.target.naturalWidth,
                    WINDOW_HEIGHT = window.innerHeight,
                    WINDOW_WIDTH = width.innerWidth;
                if ( width>height && height>WINDOW_HEIGHT ){
                    this.width = 'auto';
                    this.height = WINDOW_HEIGHT;
                } else if ( width>height && height<WINDOW_HEIGHT ){
                    this.width = WINDOW_WIDTH;
                    this.height = 'auto';
                } else if ( width<height && width>WINDOW_WIDTH ){
                    this.width = WINDOW_WIDTH;
                    this.height = 'auto';
                } else {
                    this.width = 'auto';
                    this.height = WINDOW_HEIGHT;
                }
            },
            picClose: function () {
                this.$parent.magnifying = false;
            }
        }
    }
</script>

<style lang="scss">
    .origin-ctn{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 999;
        background: rgba(0,0,0,.7);
        text-align: center;
        display: none;
    }
    .origin-ctn img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>