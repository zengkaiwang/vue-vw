<template>
  <div class="result-page">
    result page
    <div @click="gotoAnswer">
       提交跳转到结果页
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk';

export default {
  data() {
    return {

    }
  },
  created() {
    console.log('wx', wx)
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
