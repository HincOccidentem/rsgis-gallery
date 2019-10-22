<template>
    <el-aside style="margin-left:15%;" width="15%">
        <div class="avatar-wrapper"> 
            <!-- 头像框 -->
            <el-tooltip  effect="dark" content="编辑个人信息" placement="bottom">
                <div @click="modify">
                <el-avatar :size="170" :src="userImg" @error="imgErrorHandler" class="avatar-img">
                    <img src="error.png"/>
                </el-avatar></div>
            </el-tooltip>
        </div>
        <div style="margin-top:20px;font-size:25px;color:rgba(10,10,10,0.8);">
             <!-- <el-button type="text" disabled style="width:80%;">{{user}}</el-button> -->
             {{userName}}
        </div>
    </el-aside>
</template>

<script>
export default {
    data() {
        return {
            userImg:'akari.jpg',
            userId:"",
            userName:"",
        };
    },
    created() {
        // this.userName = sessionStorage.getItem("userName");
        this.userId = sessionStorage.getItem("userId");
    },
    methods: {
        modify() {
            sessionStorage.setItem("userId",this.userId);
            this.$router.push({path:'/modify'});
        },
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