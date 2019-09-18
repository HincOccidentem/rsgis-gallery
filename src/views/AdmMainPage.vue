<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../assets/img/img.jpg" class="user-avator" alt="">
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>系统管理员</div>
                        </div>
                    </div>
                    <div class="user-info-list">上次登录时间：<span>{{ lastLoginTime }}</span></div>
                    <div class="user-info-list">上次登录地点：<span>武汉</span></div>
                </el-card>
                <el-card shadow="hover" style="height:252px;">
                    <div slot="header" class="clearfix">
                        <span>排行榜</span>
                    </div>
                    <p style="margin:0 0 5px;" v-for="item in userRankSort" :key="item.id">
                        {{item.name}}
                        <el-progress text-inside :stroke-width="20" :percentage="item.score" :color="item.color"></el-progress>
                    </p>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right" style="cursor:pointer;" @click="$router.push('/ad-user')">
                                    <div class="grid-num">{{ userNumber }}</div>
                                    <div>用户数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right" style="cursor:pointer;" @click="$router.push('/ad-rank')">
                                    <div class="grid-num">{{userRank.length}}</div>
                                    <div>排名数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{submitTimes}}</div>
                                    <div>总提交次数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <register-list style="height:403px;"></register-list>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :data="data" type="bar" :options="options"></schart>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :data="data" type="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import bus from '../bus';
    import RegisterList from '../components/AdmRegisterList';
    export default {
        name: 'dashboard',
        data() {
            return {
                name: localStorage.getItem('user_name'),
                data: [{
                        name: '2018/09/04',
                        value: 1083
                    },
                    {
                        name: '2018/09/05',
                        value: 941
                    },
                    {
                        name: '2018/09/06',
                        value: 1139
                    },
                    {
                        name: '2018/09/07',
                        value: 816
                    },
                    {
                        name: '2018/09/08',
                        value: 327
                    },
                    {
                        name: '2018/09/09',
                        value: 228
                    },
                    {
                        name: '2018/09/10',
                        value: 1065
                    }
                ],
                userRank: [],
                userNumber: -1,
                options: {
                    title: '最近七天每天的用户访问量',
                    showValue: false,
                    fillColor: 'rgb(45, 140, 240)',
                    bottomPadding: 30,
                    topPadding: 30
                },
                options2: {
                    title: '最近七天用户访问趋势',
                    fillColor: '#FC6FA1',
                    axisColor: '#008ACD',
                    contentColor: '#EEEEEE',
                    bgColor: '#F5F8FD',
                    bottomPadding: 30,
                    topPadding: 30
                },
                lastLoginTime: new Date().toLocaleString(),
                colors: [
                    '#ed1941', // 鲜红
                    '#409eff', // primary 蓝
                    '#67c23a', // success 绿
                    '#e6a23c', // warning 橙
                    '#f56c6c', // error 红
                ],
                submitTimes: 0
            }
        },
        components: {
            Schart, RegisterList
        },
        computed: {
            userRankSort() {
                let rank = this.userRank.map(r=>r);
                rank = rank.sort((a, b) => {
                    return b.score - a.score
                }).splice(0, 3);
                
                if (rank.length >= 3) {
                    rank[0].color = "#f56c6c";
                    rank[1].color = "#409eff";
                    rank[2].color = "#67c23a";   
                }

                return rank;
            }  
        },
        created(){
            const self = this;
            // 获取总提交次数
            self.$axios.get('/api/user/submit-times')
            .then(response => {
                const data = response.data;
                if (data.status === 200) {
                    self.submitTimes = data.result;
                }
            }).catch(err => console.error(err));
            
            // 获取排名
            self.$axios.get('/api/user/scores')
            .then(response => {
                const data = response.data;
                if (data.status === 200) {
                    self.userRank = data.result.map(i => {
                        return {
                            name: i.user,
                            id: i.account,
                            score: i.score
                        }
                    })
                }
            }).catch(err => console.error(err));

            // 获取用户数量
            self.$axios.get('/api/admin/all-user')
            .then(response => {
                const data = response.data;
                if (data.status === 200) {
                    self.userNumber = data.result.length;
                }
            })
            self.handleListener();
            self.changeDate();
        },
        activated(){
            this.handleListener();
        },
        deactivated(){
            window.removeEventListener('resize', this.renderChart);
            bus.$off('collapse', this.handleBus);
        },
        methods: {
            changeDate(){
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
                })
            },
            handleListener(){
                bus.$on('collapse', this.handleBus);
                // 调用renderChart方法对图表进行重新渲染
                window.addEventListener('resize', this.renderChart)
            },
            handleBus(msg){
                setTimeout(() => {
                    this.renderChart()
                }, 300);
            },
            renderChart(){
                this.$refs.bar.renderChart();
                this.$refs.line.renderChart();
            },
            randomnColor() {
                let random = parseInt(Math.random() * this.colors.length - 0.5);
                return this.colors[random]
            }
        }
    }

</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
        text-align: left;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
        text-align: left;
    }

    .schart {
        width: 100%;
        height: 300px;
    }

</style>
