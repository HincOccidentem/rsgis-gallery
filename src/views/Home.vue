<template>
	<div class="home">
		<!-- 左侧工具栏 -->
		<el-drawer :visible.sync="isDrawerVisible" :direction="direction" :before-close="handleClose" :size="3">
			<u-header></u-header>
			<s-area></s-area>
		</el-drawer>  
	</div>
</template>

<script>
import uHeader from '../components/UserHeader';
import sArea from '../components/SearchArea';

export default {
	components: {
		uHeader, sArea
	},
	name: 'home',
	data() {
		return {
			isDrawerVisible: true,
        	direction:'ltr',
		}
	},
	methods: {
		handleClose(done) {
			done();
		},
	}
}
</script>
