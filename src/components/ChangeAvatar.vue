<template>
<el-aside style="margin-left:15%;" width="15%">
<div class="changeAvatar">
    <el-avatar :size="170" :src="userImg" @error="imgErrorHandler" class="avatar-img">
        <img src="error.png"/>
    </el-avatar>
    <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :show-file-list="false">
        <el-button slot="trigger" size="mini" type="primary" class="button-round-left">更换头像</el-button>
        <el-button size="mini" type="danger" class="button-round-right" :disabled="userImg=='akari.jpg'">删除头像</el-button>
    </el-upload>
    
    
</div>
</el-aside>
</template>

<script>
export default {
    data () {
        return {
            userImg:'akari.jpg',
           
        };
    },
}
</script>

<style scoped>
.changeAvatar {
    margin-top:80px;

}

.avatar-img {
    border: 2px solid rgba(152, 200, 240, 0.9);
    border-radius: 50%;
    margin-bottom: 30px;

}
</style>