<template>
  <el-form>
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
     <el-form-item>
      <el-button type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { userLogin } from '../../api/user'
import { defineComponent, ref } from 'vue'

// interface UserForm {
//     username: string;
//     password: string;
// }

export default defineComponent({
  setup () {
    // const {ctx} =
    const handleLogin = () => {
      userLogin().then((res) => {
        console.log(res)
      })
    }
    handleLogin()

    return { handleLogin }
  }
})

</script>
<style lang="scss" scoped>

</style>
