<template>
<div>
    <navigation-bar></navigation-bar>
    <!-- <el-container>
        <change-avatar></change-avatar>
        <change-info></change-info>
    </el-container> -->
    <change-info></change-info>
</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar';
import ChangeInfo from '../components/ChangeInfo';

export default {
    components: {
        NavigationBar,
        ChangeInfo,
    }
}
</script>

<style scoped>

</style>