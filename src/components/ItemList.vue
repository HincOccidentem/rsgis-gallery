<template>
<el-main class="homeMain">
<div>
    <div id="hList">
        <div v-if="ItemList.length == 0">似乎没有数据哦</div>
        <template v-for="i in hNumber">
            <el-row :key="'row'+i" type="flex" justify="space-around">
                <el-col v-for="j in wNumber" :key="i+'col'+j" :span="4">
                    <show-item-card :info="ItemList[(i-1)*wNumber+(j-1)]" @open="openDialog"></show-item-card>
                </el-col>
            </el-row>
        </template>
    </div>


    <!-- 弹出显示的singleItem的Dialog -->
    <el-dialog :visible.sync="dialogVisible" width="95%">
        <single-item></single-item>
    </el-dialog>
</div>
</el-main>
</template>

<script>
import ShowItemCard from './ShowItemCard.vue';
import SingleItem from './SingleItem';

export default {
    components: {
        ShowItemCard,
        SingleItem,
    },
    data() {

        return {
            screenWidth: '',
            ending:false,
            loading:false,
            
            wNumber:5,
            hNumber:0,
            dialogVisible:false,
            isCollapse:false,
            info:{
                img:'card.png',
                course:'GIS软件工程开发设计',
                itemName:'项目一',
                itemId:'',
                userId:'',
                userName:'',
            },
            ItemList:[],
        };
    },
    props: {
        selectGrade:'',
        selectYear:[],
        selectCourses:[],
    },
    
    methods: {
        openDialog(data) {
            this.dialogVisible = data;
        },
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
            var hHeight = document.getElementById('hList').offsetHeight;
            var wHeight = window.innerHeight;
           
            if (((hHeight + 100 <= scrollTop + wHeight && !this.loading) || (hHeight < wHeight && scrollTop == 0))&& !this.ending)
            {
                this.$emit('l',true);
                this.loading = true;
                setTimeout(() => {
                    //AXios请求数据


                    //如果回调正常，还有新数据
                    this.$emit('l',false);
                    this.loading = false;

                    //如果回调不正常，没有数据了
                    this.$emit('e',true);
                    this.ending = true;
                },500);
                
            }
        },
    },
    mounted() {
        window.addEventListener('scroll',this.handleScroll) // 监听滚动事件
        this.screenWidth = document.body.clientWidth;
        window.onresize = () => {
        return (() => {
            this.screenWidth = document.body.clientWidth;
        })();
        };


    },
    watch: {
        screenWidth: {
            handler:function(n,o){
                if (n > 1200){
                    this.wNumber = 5;
                }
                else if (n > 1000){
                    this.wNumber = 4;
                }
                else if (n > 800){
                    this.wNumber = 3;
                }
                else if (n > 500){
                    this.wNumber = 2;
                }
                else{
                    this.wNumber = 1;
                }
                this.hNumber = Math.floor(this.ItemList.length / this.wNumber);
            },
            immediate:true,
        },
        ItemList: {
            handler:function(n,o){
                this.hNumber = Math.floor(this.ItemList.length / this.wNumber);
            },
            immediate:true,
        },
        selectYear: {
            handler:function(n,o){

            },
            immediate:true,
        },
        selectCourses: {
            handler:function(n,o){

            },
            immediate:true,
        },
        selectGrade: {
            handler:function(n,o){

            },
            immediate:true,
        }
    },
    created() {
        //test//////////////////////////////////
        for (var i = 0; i<25;i++)
        {
            this.ItemList.push(this.info);
        }
    },

}
</script>

<style scoped>
.homeMain {
    padding:0px;
}
</style>