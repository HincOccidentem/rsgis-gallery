<template>
    <div>
        <navigation-bar></navigation-bar>
        <el-container>
            <user-avatar></user-avatar>
            <user-items :owner="owner"></user-items>
        </el-container>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar';
import UserAvatar from '../components/UserAvatar';
import UserItems from '../components/UserItems';

export default {
    components: {
        NavigationBar,
        UserItems,
        UserAvatar,
    },
    data () {
        return {
            owner:true,
        };
    },
    methods: {
        
        
    },
    created() {
        
    },

}
</script>

<style scoped>

</style>