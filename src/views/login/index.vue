<template>
  <div class="login-page">
    <el-form
      ref="loginForm"
      class="login-form"
      :model="loginForm"
      :rules="loginRules">
      <el-form-item prop="username">
        <div class="label">
          <label for="">{{ $t('login.userName') }}：</label>
        </div>
        <div class="control">
          <el-input
            ref="username"
            v-model="loginForm.username"
            :placeholder="$t('login.userName')">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <div class="label">
          <label for="">{{ $t('login.password') }}：</label>
        </div>
        <div class="control">
          <el-input
            type="password"
            ref="password"
            show-password
            v-model="loginForm.password"
            :placeholder="$t('login.password')">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          @click="onLogin">{{ $t('login.sinIn') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validUsername, validPassword } from '@/utils/validate'

export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error(this.$i18n.t('login.userNamePlaceholder')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error(this.$i18n.t('login.passwordPlaceholder')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loading: false,
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }]
      }
    }
  },
  methods: {
    onLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({
                path: '/admin'
              }).catch(() => {})
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          this.$message({
            type: 'error',
            message: this.$i18n.t('login.loginError')
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-page {
    position: relative;
    height: 100%;
    background: #304156;
    color: #ffffff;
  }

  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
  }
</style>
