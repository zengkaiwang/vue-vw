<template>
  <div class="index-page">
    <div class="index-title">
      我是index页面
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .index-page {
    .index-title {
      color: red;
    }
  }
</style>
