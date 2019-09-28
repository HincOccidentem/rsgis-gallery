<template>
    <el-main class="createMain">
        <div class="create-head">创建新项目</div>
        <div class="create-form">
        <el-form :model="formData" :rules="formRules" label-width="100px" :ref="formData" >
            <el-form-item label="项目名称" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="所属课程" prop="course">
                <el-select v-model="formData.course" placeholder="请选择项目所属的课程">
                    <template v-for="(course, index) in courses">
                        <el-option :label="course" :value="course" :key="index"></el-option>
                    </template>
                </el-select>
            </el-form-item>
        </el-form>
        </div>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            courses:["GIS开发设计","软件工程","C语言","C++"],
            formData: {
                name:'',
                course:'',
            },
            formRules: {
                name:[{ required: true, message: '请输入项目名称', trigger: 'blur' }],
                course:[{required: true, message: '请选择所属课程', trigger: 'change'}],
            },

        };
    },
}
</script>

<style scoped>
.create-head {
    text-align: left;
    margin-left: 10%;
    margin-top:5%;
    margin-bottom: 5%;
    font-size: 25px;
    color: rgba(103,158,241,0.9);
}

.create-form {
    width: 300px;
    margin-left: 8%;
    float: left;
}

.createMain {
    margin-right: 15%;
    border-left:2px solid rgba(88,158,248,0.1);
    border-right:2px solid rgba(88,158,248,0.1);
    /* background-color: aquamarine; */
    min-height: 600px;
    overflow: hidden;
}
</style>