<template>
    <div id="app">
        <landing v-bind:blur="bgBlur" />
        <navbar v-bind:display="bgBlur" />
        <home-body v-bind:display="bgBlur"/>
    </div>
</template>

<script>
    import Landing from './Landing.vue'
    import Navbar from './Navbar.vue'
    import HomeBody from './HomeBody.vue'

    export default {
        components:  { Landing,Navbar,HomeBody },
        data: function () {
            return {
                bgBlur: false
            }
        },
        methods: {
            eventCheck: function (event) {
                console.log(1);
                if (event.delta < 0) {
                    this.bgBlur = true;
                }
            }
        },
        mounted: function() {
            console.log(0);
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