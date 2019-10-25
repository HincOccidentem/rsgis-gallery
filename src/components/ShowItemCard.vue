<template>

<div class="card" @click="openDialog" >
<div class="imgBox" >
    <div class="img">
        <el-image :src="info.img" fit="contain">
            <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
            </div>
        </el-image>
        <el-image :src="info.img"></el-image>
    </div>
</div>
<div class="text">
    <el-row type="flex" justify="start"><el-button type="text" @click="openDialog">
        {{info.itemName}}<el-divider direction="vertical"></el-divider>{{info.course}}
    </el-button></el-row>
</div>
</div>
</template>

<script>
export default {
    data () {

        return {
            
        };
    },
    props: {
        info:{},
    },
    methods: {
        openDialog() {
            sessionStorage.setItem("userId",this.info.userId);
            sessionStorage.setItem("item",this.info.itemId);
            this.$emit('open',true);
        }
    },
}
</script>

<style scoped>
.card {
    border-radius:30px;
    font-size:10px;
    color:rgba(151,158,165,0.9);
    
}

.text {
    width:200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.imgBox {
    margin-top:40px;
    position:relative;
    width: 200px;
    height:120px;
    overflow:hidden;
    border-radius:10px;
}

.img{
  position:absolute;
  animation-play-state:paused;
}
.img:hover{
  animation:move 4s linear infinite;
}
@keyframes move{
  from {top:0px;}
  to {top:-250px;}
}
</style>