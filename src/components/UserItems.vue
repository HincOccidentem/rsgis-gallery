<template>
    <el-main class="userMain">
        <!-- <div style="height:2000px;"></div> -->
        <el-row>
        <el-input placeholder="在该个人主页中搜索" v-model="input" style="width:60%;margin-top:40px;padding-bottom:40px;"></el-input>
        <el-button  icon="el-icon-search" type="primary" @click="select" >搜索</el-button>
        <el-button  icon="el-icon-circle-plus-outline" type="success" @click="createItem" v-if="owner">创建新项目</el-button>
        </el-row>
        <!-- <el-divider style="margin:auto 0px;width:80%;"></el-divider> -->
        <div v-if="userItems.length==0">暂时还没有任何项目哦</div>
        <div v-for="(userItem,index) in userItems" :key="index">
            <item-card :userItem="userItem" :owner="owner"></item-card>
        </div>
    </el-main>
</template>

<script>
import ItemCard from './ItemCard';

export default {
    components: {
        ItemCard,
    },
    props: {
        owner:Boolean,
    },
    data () {
        return {
            input:"",
            userItem:{},
            userId:'',
            userItems:[{
                name:"tesssst",
                course:"GIS软件开发设计ssssssssssssssssssssssss",
                grade:90,
                time:"2019-09-10",
                down_num:1000000,
                note:"这个人很懒没有写任何说明",
            },
            {
                name:"中文测试",
                course:"GIS",
                grade:90,
                time:"2019-09-10",
                down_num:10,
                note:"",
            },
            {
                name:"test",
                course:"GIS",
                grade:90,
                time:"2019-09-10",
                down_num:10,
                note:"",
            },
            {
                name:"test",
                course:"GIS",
                grade:90,
                time:"2019-09-10",
                down_num:10,
                note:"",
            },
            {
                name:"test",
                course:"GIS",
                grade:90,
                time:"2019-09-10",
                down_num:10,
                note:"",
            },
            {
                name:"test",
                course:"GIS",
                grade:90,
                time:"2019-09-10",
                down_num:10,
                note:"",
            },
            ],
        };
    },
    created() {
        // 测试session
        sessionStorage.setItem("user","zhangyuhang");
        sessionStorage.setItem("item","test");
    },
    methods: {
        select() {

        },
        createItem() {
            this.$router.push({path:'/create'});
        },
    },
}
</script>

<style scoped>
.userMain {
    border-left:2px solid rgba(88,158,248,0.1);
    border-right:2px solid rgba(88,158,248,0.1);
    margin-right:15%;
    min-height: 550px;
}
</style>