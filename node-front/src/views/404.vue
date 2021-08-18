<template>
  <div>
   {{msg}}
    <el-button>默认按钮</el-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      msg: '404 NOT FOUND'
    }
  }
})
</script>
<style lang="scss" scoped>

</style>
