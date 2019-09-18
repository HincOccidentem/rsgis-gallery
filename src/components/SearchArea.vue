<template>
    <div>
        <!-- 搜索区 -->
        <div>
            <el-input maxlength="100px" name="Myinput" v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="info">搜索</el-button>
        </div>

        <!-- 浏览区 -->
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="el-header">
                <el-tab-pane label="按时间" name="first">
                    <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange">
                    </el-tree>
                </el-tab-pane>
            
                <el-tab-pane label="按课程" name="second">
                    <div>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedClass" @change="handleCheckedClassesChange">
                            <el-checkbox v-for="myclass in classes" :label="myclass" :key="myclass" border>{{myclass}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="按高分" name="third">
                    按高分
                </el-tab-pane>
            </el-tabs>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>