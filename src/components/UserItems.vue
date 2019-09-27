<template>
    <el-main style="background-color:red;margin-right:15%" width:>
        <!-- <div style="height:2000px;"></div> -->
        <el-row>
        <el-input placeholder="在该个人主页中搜索" v-model="input" style="width:60%;margin-top:40px;"></el-input>
        <el-button  icon="el-icon-search" type="primary">搜索</el-button>
        <el-button  icon="el-icon-circle-plus-outline" type="success">创建新项目</el-button>
        </el-row>
    </el-main>
</template>

<script>
import ItemCard from './ItemCard';

export default {
    components: {
        ItemCard,
    },
    data () {
        return {
            input:"",
        };
    }
}
</script>

<style scoped>

</style>