<template>
    <el-aside style="margin-left:15%;" width="15%">
        <div class="avatar-wrapper"> 
            <!-- 头像框 -->
            <el-tooltip  effect="dark" content="编辑个人信息" placement="bottom">
                <router-link :to="{path:'/'}">
                <el-avatar :size="170" :src="userImg" @error="imgErrorHandler" class="avatar-img">
                    <img src="error.png"/>
                </el-avatar></router-link>
            </el-tooltip>
        </div>
        <!-- <div style="margin-top:30px;">
             <el-button type="primary" plain style="width:80%;">编辑信息</el-button>
        </div> -->
    </el-aside>
</template>

<script>
export default {
    data() {
        return {
            userImg:'akari.jpg',
        };
    },
    methods: {
        
    },
}
</script>

<style scoped>
* {
    overflow: hidden;
}

.avatar-wrapper {
    margin-top: 80px;

}

.avatar-wrapper .avatar-img {
    border: 2px solid rgba(152, 200, 240, 0.9);
    border-radius: 50%;
}

</style>