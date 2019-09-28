<template>
    <div>
        <navigation-bar></navigation-bar>
        <el-container>
            <user-avatar></user-avatar>
            <create-item></create-item>
        </el-container>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar';
import UserAvatar from '../components/UserAvatar';
import CreateItem from '../components/CreateItem';

export default {
    components: {
        NavigationBar,
        UserAvatar,
        CreateItem,
    },

    
}
</script>

<style scoped>

</style>