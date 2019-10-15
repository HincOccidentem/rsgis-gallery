<template>
<div>
    <navigation-bar></navigation-bar>
    <el-container>
        <change-avatar></change-avatar>
        <change-info></change-info>
    </el-container>
</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar';
import ChangeInfo from '../components/ChangeInfo';
import ChangeAvatar from '../components/ChangeAvatar.vue';

export default {
    components: {
        NavigationBar,
        ChangeInfo,
        ChangeAvatar,
    }
}
</script>

<style scoped>

</style>