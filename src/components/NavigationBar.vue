<template>
<el-header height="180px">
    <div class="bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="rgba(255,255,255,0.7)" text-color="#589ef8" active-text-color="#589ef8" router="true">
            <el-menu-item index="/home2" style="margin-left:15%;font-size:19px;" >主站<el-divider direction="vertical"></el-divider></el-menu-item>
            
            <el-menu-item style="margin-left:3%;font-size: 17px;">
                <el-input placeholder="搜索" v-model="input"  size="mini">
                    <!-- <el-button slot="append" icon="el-icon-search" type="danger" style="background:rgba(88,158,248,0.8);"></el-button> -->
                </el-input>
            </el-menu-item>
            <el-submenu style="float:right; margin-right:15%;" class="sub">
                <template slot="title">
                    <router-link to="/user">
                        <el-avatar :size="45" :src="userImg" @error="imgErrorHandler">
                        <img src="error.png"/></el-avatar>
                    </router-link>
                </template>
                <el-menu-item class="menuSub" @click="user">个人主页</el-menu-item>
                <el-menu-item class="menuSub" @click="modify">修改信息</el-menu-item>
                <el-menu-item class="menuSub" @click="create">创建项目</el-menu-item>
                <el-menu-item index="/login" class="menuSub">退出登录</el-menu-item>
            </el-submenu>       
        </el-menu>
    </div>
</el-header>
</template>

<script>
export default {
    data () {
        return {
            userImg:"akari.jpg",
            activeIndex:"/user",
            input:'',
            userId:'',
        };
    },
    created() {
        this.userId = localStorage.getItem("user_name");
    },
    methods: {
        imgErrorHandle () {
            return true;
        },
        user(){
            sessionStorage.setItem("userId",this.userId);
            this.$router.push({path:'/user'});
        },
        modify(){
            sessionStorage.setItem("userId",this.userId);
            this.$router.push({path:'/modify'});
        },
        create() {
            sessionStorage.setItem("userId",this.userId);
            this.$router.push({path:'/create'});
        },
    },
}
</script>

<style scoped>
* {
    font-size: 17px;
}

.bar {
    /* max-height: 62px; */
    height:180px;
    overflow: hidden;
    background-image: url(/main-head.png);
    position:relative;
}

.el-menu-demo {
    max-height: 62px;
    overflow: hidden;
}

.el-input__inner {
    border-radius:14px;
}

.el-menu-item:hover {
    background-color: aliceblue !important;
}


.menuSub {
    font-size: 14px;
    margin: 2px 0px;
    text-align: center;
}
</style>