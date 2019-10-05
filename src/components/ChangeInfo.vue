<template>
    <el-tabs tab-position="left" class="main-tabs" type="border-card" v-model="activeName">
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane disabled>
        <!-- <span slot="label"></span> -->
            <div class="avatar" slot="label">
                
            </div>


        </el-tab-pane>
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane label="" disabled></el-tab-pane>
        <!-- <el-tab-pane label="个人设定" disabled></el-tab-pane> -->
        <!-- <el-tab-pane label="——————" disabled></el-tab-pane> -->
        <el-tab-pane name="first">
            <span slot="label" style="float:left;">头像昵称</span>
        </el-tab-pane>
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane  name="second">
            <span slot="label" style="float:left;">公开信息</span>
        </el-tab-pane>
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane name="third">
            <span slot="label" style="float:left;">安全管理</span>
        </el-tab-pane>
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane name="fourth">
            <span slot="label" style="float:left;">个人邮件</span>
        </el-tab-pane>
</el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName:'first'
        };
    },
}
</script>

<style scoped>


.avatar {
    border:2px solid steelblue;
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

#app .el-tabs--border-card {
    border-top:0px solid snow;
    margin: 0px 15%;
    height: 550px;
    /* text-align: center !important; */
}



.main-tabs {
    height: 100%;
    margin:0px 15%;
    /* text-align: center; */
}

</style>