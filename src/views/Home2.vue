<template>
<div>
    <navigation-bar></navigation-bar>
    
    <search-menu></search-menu>








    <!-- 弹出显示的singleItem的Dialog -->
    <el-dialog :visible.sync="dialogVisible" width="85%">
        <single-item></single-item>
    </el-dialog>
</div>  
</template>

<script>
import SingleItem from '../components/SingleItem';
import NavigationBar from '../components/NavigationBar';
import SearchMenu from '../components/SearchMenu';
import ItemList from '../components/ItemList';


export default {
    components: {
        SingleItem,
        NavigationBar,
        SearchMenu,
        ItemList,
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