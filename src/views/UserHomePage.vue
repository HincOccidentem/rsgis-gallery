<template>
    <div>
        <navigation-bar></navigation-bar>
        <el-container>
            <user-avatar></user-avatar>
            <user-items :owner="owner"></user-items>
        </el-container>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar';
import UserAvatar from '../components/UserAvatar';
import UserItems from '../components/UserItems';

export default {
    components: {
        NavigationBar,
        UserItems,
        UserAvatar,
    },
    data () {
        return {
            live2dwmodel:"haruto",
            owner:true,
        };
    },
    methods: {
        createmodel: function() {
            window.L2Dwidget.init({
            pluginRootPath: "live2dw/",
            pluginJsPath: "lib/",
            pluginModelPath: "live2d-widget-model-" + this.live2dwmodel + "/assets/",
            tagMode: false,
            debug: false,
            model: {
            jsonPath:
                "/live2dw/live2d-widget-model-" +
                this.live2dwmodel +
                "/assets/" +
                this.live2dwmodel +
                ".model.json"
            },
            display: { position: "left", width: 200, height: 400 },
            mobile: { show: false },
            log: true
            });
        },
    },
    created() {
        setTimeout(this.createmodel, 10);
    },

}
</script>

<style scoped>

</style>