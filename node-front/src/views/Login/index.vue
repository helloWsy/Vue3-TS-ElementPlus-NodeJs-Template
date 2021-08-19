<template>
  <el-form>
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { userLogin } from '../../api/user'
import { defineComponent, onMounted, ref, reactive } from 'vue'

interface UserForm {
    username: string;
    password: string;
}

export default defineComponent({
  data () {
    return {

    }
  },
  setup () {
    const form = reactive({
      username: '',
      password: ''
    })
    const handleLogin = () => {
      userLogin(form).then((res) => {
        console.log(res)
      })
    }

    return { form, handleLogin }
  }
})

</script>
<style lang="scss" scoped>

</style>
