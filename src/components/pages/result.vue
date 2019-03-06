<template>
  <div class="result-page">
    result page
    <div class="btn" @click="gotoAnswer">
       提交跳转到结果页
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      gotoAnswer() {
        this.$router.push({
          path: '/answer',
          query: {
            id: 12121
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
