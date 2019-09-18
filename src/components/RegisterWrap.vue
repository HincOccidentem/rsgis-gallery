<template>
    <div class="register-wrap">
        <el-form class="form" ref="registerForm" status-icon :rules="rules" :model="form" label-width="80px">
            <el-form-item label="账户" prop="account">
                <el-input style="width:280px;" v-model="form.account" placeholder="账户" @keydown.enter.native="submitRegister"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="name">
                <el-input style="width:280px;" v-model="form.name" placeholder="用户名" @keydown.enter.native="submitRegister"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input style="width:280px;" v-model="form.password" placeholder="密码" @keydown.enter.native="submitRegister" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password_confirm">
                <el-input style="width:280px;" v-model="form.password_confirm" placeholder="确认密码" @keydown.enter.native="submitRegister" type="password"></el-input>
            </el-form-item>
        </el-form>
        <br>
        <div class="bottom-btn">
            <el-button type="success" @click="submitRegister('registerForm')">提交</el-button>
            <el-button @click="back()">返回</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const validateAccount = (rule, value, callback) => {
            if (value.length > 15) {
                callback(new Error('用户名不超过15位'));
            } else {
                callback();
            }
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (value.length < 6) {
                callback(new Error('至少输入6位密码'));
            } else {
                callback();
            }
        };
        const confirmPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致'));
            } else {
                callback();
            }
        };
        return {
            rules: {
                account: [
                    { validator: validateAccount, trigger: 'blur'},
                    { required: true, message: '请输入账户', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入用户名' }
                ],
                password: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                password_confirm: [
                    { required: true, validator: confirmPass, trigger: 'change' },
                    { required: true, validator: confirmPass, trigger: 'blur' }
                ]
            },
            form: {
                account: '',
                name: '',
                password: '',
                password_confirm: ''
            }
        }
    },
    methods: {
        back() {
            this.$emit('back')
        },
        submitRegister(registerForm='registerForm') {
            const self = this;
            // 验证表单
            self.$refs.registerForm.validate()
            .then(valid => {
                if (valid) {
                    // 验证通过
                    self.$axios.post('/api/user/register', self.form)
                    .then(response => {
                        const data = response.data;
                        if (data.status === 200) {
                            self.$alert('提交成功，等待管理员审核', '提示', {
                                type: 'success'
                            });
                        } else {
                            self.$alert('[' + data.status + ']' + data.message, '提示', {
                                type: 'warning'
                            });
                        }
                    }).catch(err => {
                        if (err) {
                            self.$message({
                                message: err,
                                type: 'error'
                            });
                            console.error(err);
                        }
                    })
                } else {
                    // 验证不通过
                }
            })
            .catch(valid => {
                if (!valid) {
                    console.error(valid)
                }
            })
        }
    }
}
</script>

<style scoped>
.register-wrap {
    display: inline-block;
    vertical-align: middle;
    line-height: 0;
    text-align: left;
}
.bottom-btn {
    line-height: 0;
    text-align: center;
}
</style>