<template>
  <div class="login">
    <p>后台管理系统</p>
    <a-form
      :form="form"
      class="login__form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="账号" class="login__form__item">
        <a-input
          class="login__form__input"
          v-decorator="[
            'account',
            { rules: [{ required: true, message: '请输入账号' }] },
          ]"
        />
      </a-form-item>
      <a-form-item label="密码" class="login__form__item">
        <a-input
          class="login__form__input"
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码' }] },
          ]"
        />
      </a-form-item>
      <a-form-item
        :wrapper-col="{ span: 12, offset: 6 }"
        class="login__form__item"
      >
        <a-button class="login__form__button" type="primary" html-type="submit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    handleSubmit(e) {
      // 提交表单信息
      e.preventDefault()
      this.form.validateFields((err) => {
        if (!err) {
          // 验证成功后跳转到首页并本地缓存用户token
          localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
          this.$router.push('/')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url('../../assets/img/bg.png');
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 25px;
    font-weight: bold;
  }
  &__form {
    width: 300px;
    background-color: #fff;
    padding: 16px 16px 0 16px;
    border-radius: 5px;
    &__input {
      width: 180px;
    }
    &__item {
      padding: 0;
    }
    &__button {
      width: 180px;
    }
  }
}
</style>
