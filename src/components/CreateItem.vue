<template>
    <el-main class="createMain">
        <div class="create-head">创建新项目</div>
        <div style="margin-left:10%;float:left;color:#606266;height:220px;width:90%;text-align:left;">选择项目展板：
        <div class="create-img">
            <el-upload
                class="avatar-uploader"
                ref="upload"
                name="img"
                action="createItem"
                :auto-upload="false"
                :data="formData"
                :show-file-list="false"
                :on-change="imageChange"
                :on-success="handleImgSuccess"
                :before-upload="beforeImgUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        </div>
        <div class="create-form">
            

        <el-form :model="formData" :rules="formRules" label-width="100px" :ref="formData" >
            <el-form-item label="所属课程" prop="course">
                <el-select v-model="formData.course" placeholder="请选择项目所属的课程" style="float: left;">
                    <template v-for="(course, index) in courses">
                        <el-option :label="course" :value="course" :key="index"></el-option>
                    </template>
                </el-select>
            </el-form-item>

            <el-form-item label="项目名称" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            
            <el-form-item label="项目简介" prop="illustrator">
                <el-input v-model="formData.illustrator" placeholder="项目简介，选填"></el-input>
            </el-form-item>
            <el-button round type="success" icon="el-icon-check" style="float:left;margin-left:8%;" @click="createItem">创建项目</el-button>
            <el-button round type="info" @click="cancel">取消</el-button>
        </el-form>
        </div>
        
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            courses:["GIS开发设计","软件工程","C语言","C++"],
            userId:"",
            imageUrl:"",
            formData: {
                userId:this.userId,
                name:'',
                course:'',
                illustrator:'',
            },
            formRules: {
                name:[{ required: true, message: '请输入项目名称', trigger: 'blur' }],
                course:[{required: true, message: '请选择所属课程', trigger: 'change'}],
                illustrator:[{required: false, message: '选填', trigger: 'blur'}],
            },

        };
    },
    methods: {
        createItem() {

        },

        imageChange(file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },

        beforeImgUpload () {
            
        },

        cancel () {
            this.$router.push({path:'/user'});
        },
    },
    created() {
        this.userId = localStorage.getItem("user_name");
    },
}
</script>

<style scoped>
 .avatar-uploader {
    float: left;
    position: relative;
}

  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover  {
    border-color: #409EFF;
  }
 .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 165px;
    height: 165px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 165px;
    height: 165px;
    display: block;
  }

.create-head {
    text-align: left;
    margin-left: 10%;
    margin-top:3%;
    margin-bottom: 3%;
    font-size: 25px;
    color: rgba(103,158,241,0.9);
}



.create-img {
    margin-left: 0px;
    margin-bottom: 20px;
}

.create-form {
    width: 450px;
    margin-left: 8%;
    margin-top: 25px;
    /* float: left; */

}

.createMain {
    margin-right: 15%;
    border-left:2px solid rgba(88,158,248,0.1);
    border-right:2px solid rgba(88,158,248,0.1);
    /* background-color: aquamarine; */
    min-height: 100%;
    overflow: hidden;
}
</style>