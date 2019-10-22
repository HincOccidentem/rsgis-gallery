<template>
<div>
    <el-radio-group v-model="isCollapse">
        <el-radio-button :label="ture">折叠</el-radio-button>
        <el-radio-button :label="false">隐藏</el-radio-button>
    </el-radio-group>
    <el-menu :collapse="isCollapse" @select="handleSelect">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-"></i>
                <span slot="title">时间</span>
            </template>
            <el-menu-item index="1-1">test</el-menu-item>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
    
    data() {

        return {
            isCollapse:true,
        };
    },
}
</script>

<style scoped>

</style>