<template>
    <div id="app">
        <landing v-bind:blur="bgBlur" />
        <navbar v-bind:display="bgBlur" />
        <!--<img-panel v-bind:flag="bgBlur" />-->
        <router-view></router-view>
    </div>
</template>

<script>
import Landing from './Landing.vue'
import Navbar from './Navbar.vue'
import ImgPanel from './ImgPanel.vue'

import { mapState, mapMutations } from 'vuex'


export default {
    components: { Landing, Navbar, ImgPanel },
    data: function () {
        return {
            setFlag: true
        }
    },
    computed: {
        ...mapState({
            bgBlur: state => state.bgMode.blurred
        })
    },
    methods: {
        ...mapMutations(['blur']),
        eventCheck(event) {
            var that = this;
            if (this.bgBlur === false) {
                event.preventDefault();
                this.setFlag = false;
                setTimeout(function () {
                    that.setFlag = true;
                }, 1300)
            }
            if (this.setFlag === false) {
                event.preventDefault();
            }
            if (event.delta < 0) {
                this.showPanel();
            }
        },
        showPanel() {
            this.blur();
            this.$router.push('/works');
        }
    },
    mounted: function () {
        const path = this.$route.path;
        if (path === '/works') {
            this.showPanel();
        }
        const _eventCompat = function (event) {
            var type = event.type;
            if (type == 'DOMMouseScroll' || type == 'mousewheel') {
                event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
            }
            if (event.srcElement && !event.target) {
                event.target = event.srcElement;
            }
            if (!event.preventDefault && event.returnValue !== undefined) {
                event.preventDefault = function () {
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