<template>
    <el-tabs tab-position="left" class="main-tabs" type="border-card" v-model="activeName">
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane disabled>
        <!-- <span slot="label"></span> -->
            <div class="avatar" slot="label">
                <el-avatar :size="150" :src="userImg" @error="imgErrorHandler" class="avatar-img">
                    <img src="error.png"/>
                </el-avatar>
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
            <info-avatar></info-avatar>
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
        <!-- <el-tab-pane label="" disabled></el-tab-pane> -->
</el-tabs>
</template>

<script>
import InfoAvatar from './InfoAvatar';


export default {
    components: {
        InfoAvatar,
    },

    data() {
        return {
            activeName:'first',
            userImg:'akari.jpg',
            userId:'',
        };
    },
}
</script>

<style scoped>


.avatar {
    border:2px solid rgba(152, 200, 240, 0.9);
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