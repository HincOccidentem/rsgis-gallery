<template>
    <div style="min-height:100%;">
        <navigation-bar></navigation-bar>
        <single-item :owner=true user="zhangyuhang" item="test"></single-item>
        <!-- <el-button @click="dialogvisible=true"></el-button>
        <el-dialog title="test" :visible.sync="dialogVisible" width="80%">
            <single-item :owner=false user="zhangyuhang" item="test"></single-item>
             <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </el-dialog> -->
    </div>
</template>

<script>
import SingleItem from '../components/SingleItem.vue';
import NavigationBar from '../components/NavigationBar';

export default {
    components: {
        SingleItem,
        NavigationBar,
    },
    data () {
        return {
            dialogVisible:false,
            live2dwmodel:"z16",
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
            display: { position: "right", width: 200, height: 400 },
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