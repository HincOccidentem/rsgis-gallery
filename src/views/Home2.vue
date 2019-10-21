<template>
<div>
    <navigation-bar></navigation-bar>
    <el-button @click="dialogVisible=true;">test</el-button>
    <!-- <transition name="el-zoom-in-center"> -->
    <el-dialog :visible.sync="dialogVisible" width="85%">
        <single-item></single-item>
    </el-dialog>
    <!-- </transition> -->
</div>  
</template>

<script>
import SingleItem from '../components/SingleItem';
import NavigationBar from '../components/NavigationBar';


export default {
    components: {
        SingleItem,
        NavigationBar,
        
    },
    data() {

        return {
            dialogVisible:false,
            widthTest:200,    
        };
    } ,

}
</script>

<style scoped>

</style>