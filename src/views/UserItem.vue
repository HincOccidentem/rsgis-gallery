<template>
    <div style="min-height:100%;">
        <navigation-bar></navigation-bar>
        <single-item :owner=true :user="user" :item="item"></single-item>
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
            
            user:"",
            item:"",
        };
    },
    methods: {
        
    },
    created() {
        this.user = sessionStorage.getItem("user");
        this.item = sessionStorage.getItem("item");
    },

}
</script>

<style scoped>

</style>