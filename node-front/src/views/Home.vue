<template>
  <div>
    1111
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userLogin } from '@/api/user'

export default defineComponent({
  setup () {
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
