<template>
    <div class="search-result">
        用户{{ $route.params.userId }}

    </div>
</template>

<script>
    import pics from '../api/pics';

    export default {
        name: 'search',
        data: function () {
            return {
                info: {}
            }
        },
        created: function () {
            console.log(this);
            console.log(this.info);
            this.getData();
        },
        watch: {
            '$route': 'getData'
        },
        methods: {
            getData () {
                const that = this;
                let load = new Promise(function (resolve) {
                    pics.getInfo(that.$route.params.userId, resolve);
                });
                load.then(function (info) {
                    that.info = info;
                });
            }
        }
    }
</script>

<style>

</style>
