<template>
    <el-card  shadow="always" style="width:90%;margin:10px auto;">
         <div slot="header" class="card-head">
            <el-link type="primary" @click="toItem" style="float:left;font-size:20px;">{{userItem.name}}</el-link>
            <el-tooltip  effect="dark" content="警告：这将删除整个项目内容！" placement="right">
            <el-button type="danger" v-if="owner" style="float:right;" size="mini" round>删除</el-button>
            </el-tooltip>
         </div>
         <div class="card-content">
             <el-row v-if="userItem.note" style="font-style: italic;">{{userItem.note}}</el-row>
            <el-row>
                <el-col :span="2">课程：</el-col>
                <el-col :span="8">{{userItem.course}}</el-col>
                <el-col :span="7">创建时间：{{userItem.time}}</el-col>
                <el-col :span="7" style="float:right;text-align:right;">下载量：{{userItem.down_num}}</el-col>
            </el-row>
         </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    props:{
        userItem:{},
        owner:Boolean,
    },
    methods: {
        toItem() {
            sessionStorage.setItem("item",this.userItem.name);
            this.$router.push({path:'/item'});
        },
    },
}
</script>

<style scoped>
.card-head {
    margin-bottom: 20px;
}
.boxcard .el-card_body {
    padding:0px;
}
.card-content {
    font-size: 14px;
    text-align: left;
    color: rgba(55,55,55,0.6);
}

.el-row {
    margin-bottom: 10px;
}
</style>