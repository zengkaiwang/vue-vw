<template>
  <div class="result-page">
    <div class="item">result page</div>
    <div class="item" @click="gotoAnswer">
       提交跳转到结果页
    </div>

    <!-- 小程序交互 -->
    <div class="item" @click="jumpbtn">点击跳转到小程序</div>
    <div class="item choose-image">测试sdk的拍照</div>
    <div class="item postdata">h5传递message给小程序</div>    
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
    console.log("wx.miniProgram", wx.miniProgram);
    console.log("wx", wx);

    //判断小程序环境
    wx.miniProgram.getEnv(function (res) {
      console.log("res.miniprogram", res.miniprogram) // true
    })
  },
  methods: {
    gotoAnswer() {
      this.$router.push({
        path: '/answer',
        query: {
          id: 12121
        }
      });
    },
    //跳转到小程序页面
    jumpbtn() {
      // wx.miniProgram.navigateTo({url:'/pages/index/main'});
      // wx.miniProgram.redirectTo({url:'/pages/course/main'});
      // wx.miniProgram.reLaunch({url:'/pages/course/main'});
      wx.miniProgram.navigateBack({url:'/pages/exercise/main'});
    }
  }
}
</script>

<style lang="less" scoped>
  .item {
    text-align: center;
    margin: 20px 0;
    background-color: skyblue;
    border-radius: 20px;
  }
</style>
