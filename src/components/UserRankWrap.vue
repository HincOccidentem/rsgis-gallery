<template>
    <div class="user-rank-wrap" :style="{width: width}">
        <h2>排行榜</h2>
        
        <img src="../assets/img/stage.png">

        <el-table :data="rankList" height="610px">
            <el-table-column label="排名" width="135" align="right">
                <template slot-scope="scope">
                    <span :class="scope.row.enhance ? 'enhance' : ''">{{scope.$index+1}}</span>
                </template>
            </el-table-column>
            <el-table-column label="得分" width="200" align="center">
                <template slot-scope="scope">
                    <span :class="scope.row.enhance ? 'enhance' : ''">{{scope.row.score}}</span>
                </template></el-table-column>
            <el-table-column label="队伍" align="center">
                <template slot-scope="scope">
                    <span :class="scope.row.enhance ? 'enhance' : ''">{{scope.row.user}}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            default: '475px',
            type: String
        },
        account: {
            type: String
        }
    },
    data() {
        return {
            rankList: []
        }
    },
    methods: {
        getRank() {
            const self = this;
            self.$axios.get('/api/user/scores')
            .then(response => {
                const data = response.data;
                if (data.status === 200) {
                    
                    // 突出显示个人
                    if (self.account) {
                        self.rankList = data.result.map(i => {
                            if (self.account === i.account) {
                                i.enhance = true;
                                return i;
                            } else {
                                return i;
                            }
                        })
                    } else {
                        self.rankList = data.result.map(i=>i);
                    }

                } else {
                    console.error(data.message);
                    self.$message({
                        type: 'error',
                        message: '[' + data.status + ']' + data.message
                    });
                }
            })
            .catch(err => {
                console.error(err)
            });
        }
    },
    created() {
        this.getRank();
    },
}
</script>

<style scoped>
.user-rank-wrap {
    /* border: 2px dashed gray; */
    line-height: 20px;
    height: 800px;
}
.user-rank-wrap img {
    width: 250px;
    height: auto;
}
.enhance {
    font-size: 16px;
    font-weight: bold;
    color: red;
}
</style>