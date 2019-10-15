<template>
<el-main class="changeMain">
<div class="ChangeHead">
    更新个人信息
</div>
<div class="ChangeInfo">
    <el-form :model="formData"  label-width="100px" :ref="formData" size="mini">
        <el-form-item label="姓 名">
            <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="年 级">
            <el-input v-model="formData.grade"></el-input>
        </el-form-item>
        <el-form-item label="邮 箱">
            <el-input v-model="formData.email"></el-input>
        </el-form-item>
         <el-form-item label="性 别">
            <el-radio-group v-model="formData.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="success" size="mini" round style="float:left;">更新信息</el-button>
            <el-button type="warning" size="mini" round>修改密码</el-button>
            <el-button type="info" size="mini" round>取消</el-button>
        </el-form-item>
    </el-form>
</div>
</el-main>
</template>

<script>



export default {
    components: {
        
    },

    data() {
        return {
            activeName:'first',
            userImg:'akari.jpg',
            userId:'',
            formData:{
                name:'',
                grade:'',
                email:'',
                gender:'',
            },
        };
    },
}
</script>

<style scoped>
.changeMain {
    border-left:2px solid rgba(88,158,248,0.1);
    border-right:2px solid rgba(88,158,248,0.1);
    margin-right:15%;
    min-height: 550px;
}
.ChangeHead {
    margin-left:10%;
    text-align:left;
    color: rgba(103,158,241,0.9);
    font-size: 25px;
}

.ChangeInfo {
    width:45%;
    margin-top:30px;
    margin-left:5%;

}



</style>