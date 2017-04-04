<template>
    <div id="app">
        <landing v-bind:blur="bgBlur" />
        <navbar v-bind:display="bgBlur" />
        <img-panel v-bind:flag="bgBlur" />
    </div>
</template>

<script>
    import Landing from './Landing.vue'
    import Navbar from './Navbar.vue'
    import ImgPanel from './ImgPanel.vue'

    export default {
        components:  { Landing, Navbar,ImgPanel },
        data: function () {
            return {
                bgBlur: false,
                setFlag: true
            }
        },
        methods: {
            eventCheck: function (event) {
                var that = this;
                if (this.bgBlur === false){
                    event.preventDefault();
                    this.setFlag = false;
                    setTimeout(function () {
                        that.setFlag = true;
                    },1300)
                }
                if (this.setFlag === false){
                    event.preventDefault();
                }
                if (event.delta < 0) {
                    this.bgBlur = true;
                }

            }
        },
        mounted: function() {
            const _eventCompat = function(event) {
                var type = event.type;
                if (type == 'DOMMouseScroll' || type == 'mousewheel') {
                    event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
                }
                if (event.srcElement && !event.target) {
                    event.target = event.srcElement;
                }
                if (!event.preventDefault && event.returnValue !== undefined) {
                    event.preventDefault = function() {
                        event.returnValue = false;
                    };
                }
                return event;
            };
            const that = this;
            var type = "mousewheel";
            if (document.mozHidden !== undefined) {
                type = "DOMMouseScroll";
            }
            window.addEventListener(type, function (event) {
                that.eventCheck.call(this, _eventCompat(event));
            });
        },
    }
</script>

<style lang="scss">

</style>