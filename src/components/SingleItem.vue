<template>
    <div>
        <!-- 抬头索引 -->
        <div class="SingleItem-wrapper top">
            <div class="content">
                <div class="head-braeadcrumb">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/user' }" class="bread-item">{{userName}}</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/item' }" class="bread-item">{{itemName}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
        </div>
        <!-- 卡片式主体 -->
        <!-- <div class="SingleItem-wrapper" style="background-color:rgba(246, 246, 246, 0.3);"> -->
        <div class="SingleItem-wrapper">
            <div class = "content">
                <div class="card">
                    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                        <!-- code 部分 -->
                        <el-tab-pane label="代码" name="first">
                            <!-- 说明编辑 -->
                            <div class="ill">
                                <span v-show="!editing" class="edit-left">{{illustrator}}</span>
                                <span class="edit-right"><el-button type="primary" icon="el-icon-edit" v-if="owner" v-show="!editing" @click="editing = !editing" size="mini" round>编辑</el-button></span>
                                <el-input placeholder="请输入简介：" v-if="owner" v-show="editing" v-model="ill_input" :clearable="true" class="edit-left"></el-input>
                                <span class="edit-right">
                                <el-button-group>
                                    <el-button type="primary"  v-if="owner" v-show="editing" @click="successEdit" round>保存</el-button>
                                    <el-button type="primary"  v-if="owner" v-show="editing" @click="cancelEdit" round>取消</el-button>      
                                </el-button-group>
                                </span>
                            </div>
                            <!-- 作者、课程、得分、下载量展示 -->
                                
                            <el-button-group class="infogroup">
                                <el-button type="primary" plain style="width:41%;" class="infobutton" round>创作者:{{userList}}</el-button>
                                <el-button type="primary" plain style="width:25%;" class="infobutton">课程:{{course}}</el-button>
                                <el-button type="primary" plain style="width:17%;" class="infobutton">成绩:{{grade}}</el-button>
                                <el-button type="primary" plain style="width:17%;" class="infobutton" round>下载次数:{{download_num}}</el-button>
                            </el-button-group>
                            <!-- 上传、下载按钮 -->
                            <div class="up">
                                <el-upload
                                    class="upload-demo"
                                    ref="upload"
                                    action="/file/file_upload"
                                    name="userfile"
                                    :headers="upLoadHeaders"
                                    :multiple=true
                                    :data="upLoadData"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :file-list="fileList"
                                    :auto-upload="false"
                                    :onError="uploadError"
                                    :onSuccess="uploadSuccess"
                                    :before-upload="beforfUpload" >
                                    
                                    <el-button slot="trigger" size="mini" type="primary" v-if="owner" class="button-round-left">选取文件</el-button>
                                    <el-button size="mini" type="success" @click="submitUpload" v-if="owner" class="button-round-right">上传到服务器</el-button>
                                    
                                    <span class="edit-right">
                                        <el-button-group style="float:right;">
                                            <el-button type="primary"  v-show="tab_choice" size="mini" @click="downloadAll" round>下载所选</el-button>
                                            <el-button type="danger"  v-if="owner" v-show="tab_choice" size="mini" @click="deleteAll" round>删除所选</el-button>
                                        </el-button-group>
                                    </span>
                                    <div slot="tip" class="el-upload__tip" v-if="owner"> 建议程序打包压缩后上传，PPT等可以单独上传，可以选择多个文件后统一上传</div>
                                </el-upload>
                                
                            </div>
                            <!-- 项目文件表格 -->
                            <div class="mainTable">
                                <div style="border:1px solid rgba(200,200,200,0.7);border-radius: 6px">
                                <el-table
                                    ref="multipleTable"
                                    :data="mainTableData"
                                    tooltip-effect="dark"
                                    stripe
                                    @selection-change="handleSelectionChange">
                                    <el-table-column type="selection" width="55"></el-table-column>
                                    <el-table-column prop="filename" label="文件"></el-table-column>
                                    <el-table-column prop="uptime" label="上传时间"></el-table-column>
                                    <el-table-column prop="size" label="大小"></el-table-column>
                                    <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button-group>
                                        <el-button size="mini" type="primary" @click="handleDownload(scope.row)" round>下载</el-button>
                                        <el-button size="mini" type="danger"  v-if="owner" @click="handleDelete(scope.row)" round>删除</el-button>
                                        </el-button-group>
                                    </template>
                                    </el-table-column>
                                </el-table>
                                </div>
                            </div>
                            <!-- readme -->
                            <div class="readme-wrapper">
                                <div style="background-color:rgb(224,224,224);margin-top:0px;"><h3 style="margin-top:0px;"> Readme</h3></div>
                                <div id="readme" style="margin:0px;"></div>
                            </div>
                            <!-- <div style="height:3000px;"></div> -->
                        </el-tab-pane>
                        <el-tab-pane label="评论交流" name="second">
                            该功能暂未开放
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "SingleItem",
    //data变量
    data() {
        return {
            activeName:"first",
            illustrator:"这个人很懒没有写任何说明",
            editing:false,
            ill_input:"",
            course:"GIS软件工程设计、、、、",
            grade:"100",
            download_num:1000,
            upLoadData:{
                user:"",
                course:"",
                item:"",
            },
            fileList:[],
            mainTableData:[
                {
                    filename:'test',
                    uptime:'2019-09-10',
                    size:'2M',
                    
                },
            ],
            tableSelection:[],
            tab_choice:false,
            owner:false,
            userId:"",
            userName:"",
            item:"",
            itemName:"",
            userList:'张雨杭 张雨杭 张雨杭 张雨杭 张雨杭',
        }
    },
    //传入参数

    //方法
    methods: {
        //获取信息
        getInfo() {
            this.$axios
                .get("/file/getinfo", {
                params: {
                    user: this.userId,
                    item: this.item,
                }
                })
                .then((response) => {
                    if (response.data.illustrator.trim().length>0)
                    {
                        this.illustrator = response.data.illustrator;
                    }
                    this.course = response.data.course;
                    this.download_num = response.data.download_num;
                    this.grade = response.data.grade;
                    this.mainTableData = response.data.mainTableData;
                    this.itemName = response.data.itemName;
                    this.userName = response.data.userName;
                })
                .catch((error) => {
                    this.$notify.error({
                    title: '错误',
                    message: '页面载入似乎存在问题，请尝试重新载入'+error,
                    });
                });
        },

        // 简介上传
        successEdit() {
            if (!this.ill_input.trim().length > 0 || this.ill_input == this.illustrator)
            {
                this.ill_input = "";
                this.editing = false;
                return;
            }
            this.$axios
                .get("/file/ill_upload", {
                params: {
                    user: this.user,
                    item: this.item,
                    text: this.ill_input,
                }
                })
                .then((response) => {
                    if (response.data.result == "1")
                    {
                        this.illustrator = this.ill_input;
                        this.editing = false;
                        this.$notify({
                            title: '成功',
                            message: '简介修改成功',
                            type: 'success'
                        });
                        
                    }
                    else
                    {
                        this.$notify({
                            title: '警告',
                            message: '上传失败，请稍后重试',
                            type: 'warning'
                        });
                    }
                })
                .catch((error) => {
                    this.$notify.error({
                    title: '错误',
                    message: error,
                    });
                })
        },

        //取消简介编辑
        cancelEdit() {
            this.ill_input = "";
            this.editing = false;
        },

        handleClick() {},

        handlePreview() {},

        handleRemove() {},

        uploadError(err, file, fileList) {
            this.$notify.error({
                title: '错误',
                message: err,
            })
        },
        //成功上传的回调函数
        uploadSuccess(response, file, fileList) {
            this.$notify({
                title: '成功',
                message: '文件上传成功',
                type: 'success'
            });
            this.getInfo();
        },

        //文件上传前的验证和更新
        beforfUpload(file){
            if (file.size > 500000000)
            {
                this.$notify({
                    title: '警告',
                    message: '文件不能超过500M！',
                    type: 'waring',
                });
                return false;
            }
        },

        submitUpload(){
            this.upLoadData.user = this.userId;
            this.upLoadData.item = this.itemId;
            this.upLoadData.course = this.course;
            if (this.user.trim().length > 0 && this.item.trim().length > 0)
            {
                this.$refs.upload.submit();
            }
        },

        handleSelectionChange(selection){
            this.tableSelection = selection;
            if (selection.length > 0)
            {
                this.tab_choice = true;
            }
            else
            {
                this.tab_choice = false;
            }
        },

        handleDownload(row) {
             this.$axios
                .post("/file/download", {
                params: {
                    user: this.user,
                    item: this.item,
                    url: row.fileUrl,
                    name:row.filename,
                }
                })
                .then((response) => {
                //    console.log(response);
                })
                .catch((error) => {
                    this.$notify.error({
                    title: '错误',
                    message: '下载失败.请稍后重试！\n'+error,
                    });
                });
        },

        handleDelete(row) {
             this.$axios
                .get("/file/delete", {
                params: {
                    user: this.user,
                    item: this.item,
                    url: row.fileUrl,
                    name:row.filename,
                }
                })
                .then((response) => {
                   console.log(response);
                   this.getInfo();
                })
                .catch((error) => {
                    this.$notify.error({
                    title: '错误',
                    message: '删除失败，请稍后重试！\n'+error,
                    });
                });
        },

        downloadAll() {
            var len = this.tableSelection.length;
            var i = 0;
            for (i=0; i<len; i++)
            {
                this.handleDownload(this.tableSelection[i]);
            }
        },

        deleteAll() {
            var len = this.tableSelection.length;
            var i = 0;
            for (i=0; i<len; i++)
            {
                this.handleDelete(this.tableSelection[i]);
            }
        },
    },
    //create
    created() {
        this.userName = sessionStorage.getItem("userName");
        this.userId = sessionStorage.getItem("userId");
        this.item = sessionStorage.getItem("item");
        if (this.userId == localStorage.getItem("user_name"))
        {
            this.owner = true;
        }
        else
        {
            this.owner = false;
        }
    },
    //mounted请求
    mounted() {
        this.getInfo();
    },



}
</script>

<style scoped>
 * {
    /* margin:0;
    padding:0; */
    overflow: hidden;
    font-family:arial;
    /* font-size:14px; */
    /* color:#303133; */
}

a {
    text-decoration: none;
    color: #202020;
}

 .SingleItem-wrapper {
     width: 100%;
 }

 .SingleItem-wrapper .content {
     width: 70%;
     margin:0 auto;
 }

 .SingleItem-wrapper .head-braeadcrumb  {
    font-size:20px;
    margin-top:40px;
    margin-bottom: 30px;
    margin-left: 10px;
 }

 .SingleItem-wrapper .head-braeadcrumb .bread-item {
     font-size: 18px;
 }

.SingleItem-wrapper .ill {
    text-align: left;
    font-style: italic;
    margin: 30px 5%;
    margin-bottom: 20px;
}

.SingleItem-wrapper .edit-left {
    width:65%;
}

.SingleItem-wrapper .edit-right {
    float: right;
}

.SingleItem-wrapper .infogroup {
    width: 90%;
    margin:20px 5%;
    margin-bottom: 30px;
}

.SingleItem-wrapper .infogroup .infobutton {
    text-align: left;
    height: 40px;
} 

.SingleItem-wrapper .up {
    text-align: left;
    width:90%;
    margin:20px 5%;
}



.SingleItem-wrapper .mainTable {
    width:90%;
    margin:20px 5%;
}

.SingleItem-wrapper .readme-wrapper {
    width: 90%;
    margin:20px 5%;
    text-align: left;
    border: 1px solid rgba(200, 200, 200 , 0.7);
    border-radius: 6px;
    min-height: 60px;
    font-size: 16px;
}
</style>
