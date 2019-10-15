<template>
    <div class="bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="rgba(255,255,255,0.7)" text-color="#589ef8" active-text-color="#589ef8" router="true">
            <el-menu-item index="/" style="margin-left:15%;font-size:19px;" >主站<el-divider direction="vertical"></el-divider></el-menu-item>
            
            <el-menu-item style="margin-left:3%;font-size: 17px;">
                <el-input placeholder="搜索" v-model="input"  size="mini">
                    <!-- <el-button slot="append" icon="el-icon-search" type="danger" style="background:rgba(88,158,248,0.8);"></el-button> -->
                </el-input>
            </el-menu-item>
            <el-submenu style="float:right; margin-right:15%;" class="sub">
                <template slot="title">
                    <router-link to="/user">
                        <el-avatar :size="45" src="akari.jpg" @error="imgErrorHandler">
                        <img src="error.png"/></el-avatar>
                    </router-link>
                </template>
                <el-menu-item index="/user" class="menuSub">个人主页</el-menu-item>
                <el-menu-item index="/modify" class="menuSub">修改信息</el-menu-item>
                <el-menu-item index="/create" class="menuSub">创建项目</el-menu-item>
                <el-menu-item index="/login" class="menuSub">退出登录</el-menu-item>
            </el-submenu>       
        </el-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex:"/user",
            input:'',
        };
    },
    methods: {
        imgErrorHandle () {
            return true;
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
    background-image: url(/main-head.png)
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