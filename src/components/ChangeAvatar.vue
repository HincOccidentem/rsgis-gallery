<template>
<el-aside style="margin-left:15%;" width="15%">
<div class="info-avatar">
      
        <div class="avatar" slot="label">
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
                <el-button-group>
                    <el-button size="small" type="primary" round>更换头像</el-button>
                    <el-button size="small" type="danger" round>删除头像</el-button>
                </el-button-group>
            </el-upload>
        </div>
        
        <div class="info-form">
            <el-form :model="formData"  label-width="100px" :ref="formData" >
                <el-form-item label="名称">
                    <el-input v-model="formData.user_name"></el-input>
                </el-form-item>
            </el-form>
        </div>
   
</div>
</el-aside>
</template>

<script>
export default {
    data () {
        return {
            userImg:'akari.jpg',
            formData:{
                user_name:"",
            },
            
        };
    },
}
</script>

<style scoped>
.info-avatar {
    text-align: center;
}

.avatar {
    background-color: aliceblue !important;
    border:2px solid rgba(152, 200, 240, 0.9);
    border-radius: 50%;
    width: 170px;
    height: 170px;
    margin:25px 110px;
}

.info-form {
    width:60%;
    margin:55px 50px;
}
</style>