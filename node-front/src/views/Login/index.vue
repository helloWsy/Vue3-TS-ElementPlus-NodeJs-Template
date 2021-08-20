<template>
  <el-card header="请先登录" class="login-container">
    <el-form @submit.prevent="login">
      <el-form-item label="用户名" label-width="5rem">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密  码" label-width="5rem">
        <el-input  type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { userLogin } from '../../api/user'
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

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
      username: 'admin',
      password: '123456'
    })
    const router = useRouter()

    const login = () => {
      userLogin(form).then((res) => {
        console.log(res)

        const { code } = res
        if (code === 200) {
          // router.push({ path: '/' })
        } else {

        }
      })
    }

    return { form, login }
  }
})

</script>
<style lang="scss" scoped>
.login-container {
  width: 25em;
  margin: 10em auto;
}
</style>
