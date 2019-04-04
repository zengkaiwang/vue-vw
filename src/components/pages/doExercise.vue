<template>
  <div class="doexercise-page">

    <div class="doexercise-title">
      <span class="order">3</span>
      <span>/20</span>
      <span class="type">判断题</span>
    </div>

    <div class="doexercise-main">
      <!-- 设计稿是640px，有一个红色盒子宽高都是320px，里面的文字是28px，那么下面是这个例子的代码, 注意需要修改设计稿配置viewportWidth: 640 -->
      <div class="index-page">
        <span class="title">我是标题</span>
      </div>
    </div>

    <div class="doexercise-bottom">
      <div class="submit" @click="gotoAnswer">提交</div>
      <div class="submit" @click="gotoApplet">返回预习页</div>
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk';

export default {
  data() {
    return {
      avatarUrl: ''
    }
  },
  methods: {
    gotoAnswer() {
      this.$router.push({
        path: '/result',
        query: {
          id: 12121
        }
      });
    },
    // 跳转到小程序页面
    gotoApplet() {
      // wx.miniProgram.navigateTo({url:'/pages/index/main'});
      // wx.miniProgram.redirectTo({url:'/pages/course/main'});
      // wx.miniProgram.reLaunch({url:'/pages/course/main'});
      wx.miniProgram.navigateBack({url: '/pages/exercise/main'});
    }
  }
};
</script>

<style lang="less" scoped>
  .doexercise-page {
    text-align: left;
    .doexercise-title {
      padding: 0 30px 20px;
      border-bottom: 8px solid #F7F9FA;
      .order {
        font-size: 40px;
        color: #4CC760;
        padding-right: 16px;
      }
      .type {
        font-size: 28px;
        color: #333333;
        padding-left: 16px;
      }
    }
    .doexercise-main {
      padding: 40px 30px;
    }
    .doexercise-bottom {
      position: absolute;
      bottom: 16px;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 32px;
      .submit {
        height: 80px;
        line-height: 80px;
        background:linear-gradient(90deg,rgba(80,212,101,1) 0%,rgba(40,191,104,1) 100%);
        border-radius:44px;
        font-size: 32px;
        color: #FFFFFF;
        margin: 20px 0;
      }
    }

    // 测试代码
    .index-page {
      width: 320px;
      height: 320px;
      background: red
    }
    .title {
      font-size: 28px;
    }
  }
</style>
