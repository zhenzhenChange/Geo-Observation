<template>
  <div class="login-bg">
    <a-card class="login" :bordered="false" :hoverable="true">
      <img slot="cover" :src="require('@/assets/images/cover.jpg')" />
      <template slot="actions">
        <a-icon title="设置" key="setting" type="setting" />
        <a-icon title="编辑" key="edit" type="edit" />
        <a-icon title="更多" key="ellipsis" type="ellipsis" />
      </template>
      <a-card-meta title="地理观测中控" description="This is very cool~">
        <a-avatar slot="avatar" :src="require('@/assets/images/avatar.jpg')" />
      </a-card-meta>
      <a-form :form="form" class="login-form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            autocomplete="off"
            :allow-clear="true"
            placeholder="username"
            v-decorator="['username', { rules: [{ required: true, message: '请输入账号哦~' }] }]"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password
            autocomplete="off"
            :allow-clear="true"
            placeholder="password"
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码哦~' }] }]"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="['remember', { initialValue: true, valuePropName: 'checked' }]">
            别忘了我~
          </a-checkbox>
          <a class="login-forgot" href="">忘记密码啦~</a>
          <a-button icon="login" type="primary" html-type="submit" class="login-button">
            登录
          </a-button>
          Or
          <a href="">现在注册！</a>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('../assets/images/login_bg.jpg');

  .login {
    top: 50%;
    left: 50%;
    width: 400px;
    position: absolute;
    transform: translate(-50%, -50%);

    .login-form {
      width: 100%;
      padding: 16px 0;

      .login-forgot {
        float: right;
      }

      .login-button {
        width: 100%;
      }

      .ant-form-item:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
