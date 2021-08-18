<template>
  <div>
    111
  </div>
</template>

<script lang="ts">
import { userLogin } from '@/api/user'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
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
