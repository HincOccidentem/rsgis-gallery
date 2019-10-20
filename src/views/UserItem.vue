<template>
    <div style="min-height:100%;">
        <navigation-bar></navigation-bar>
        <single-item></single-item>
    </div>
</template>

<script>
import SingleItem from '../components/SingleItem.vue';
import NavigationBar from '../components/NavigationBar';

export default {
    components: {
        SingleItem,
        NavigationBar,
    },
    data () {
        return {
            
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