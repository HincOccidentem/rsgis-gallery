<template>
    <div class="bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#589ef8" active-text-color="#589ef8" router="true">
            <el-menu-item index="/" style="margin-left:15%;">主站<el-divider direction="vertical"></el-divider></el-menu-item>
            
            <el-menu-item style="margin-left:3%;">
                <el-input placeholder="搜索" v-model="input"  size="mini">
                    <!-- <el-button slot="append" icon="el-icon-search" type="danger" ></el-button> -->
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
    max-height: 62px;
    overflow: hidden;
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