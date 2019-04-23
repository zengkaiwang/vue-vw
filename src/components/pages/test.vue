<template>
  <div id="app">
    <!-- 弹框提示 -->
    <!-- <toast></toast> -->

    <!-- toast弹框方案二 -->
    <input type="button" value="显示弹窗" @click="showToast">

    <!-- loading组件 -->
    <!-- <loading :data="loadParams"></loading> -->

    <!-- 动态加载loading组件方案 -->
    <!-- <input type="button" value="动态加载显示loading组件" @click="showLoading"> -->
  </div>
</template>

<script>
// import toast from '../common/toast/toast';
// import loading from '../common/loading/loading';
// 非全局挂载按需加载loadong组件
// import { showLoading, hideLoading } from '@/components/common/loading/index';

export default {
  // components: {toast, loading},
  data() {
    return {
      loadParams: {
        bottom: 30
      }
    }
  },
  methods: {
    showToast () {
      // this.$toast({
      //   mgs: '奖励分数',
      //   score: '+6',
      //   imgUrl: require('@/assets/score@2x.png'),
      //   duration: 1000
      // });
      this.$toast();
    }
    // showLoading () {
    //   // this.$showLoading();
    //   showLoading();
    //   setTimeout(() => {
    //     // this.$hideLoading();
    //     hideLoading();
    //   }, 1000);
    // }
  }

}
</script>
