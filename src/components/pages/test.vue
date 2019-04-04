<template>
  <div id="app">
    <!-- 弹框提示 -->
    <!-- <toast></toast> -->

    <!-- toast弹框方案二 -->
    <input type="button" value="显示弹窗" @click="showToast">

    <!-- loading组件 -->
    <!-- <loading :data="loadParams"></loading> -->
  </div>
</template>

<script>
// import toast from '../common/toast/toast';
// import loading from '../common/loading/loading';
// import toastRegistry from '@/components/common/toast/index'

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
      this.$toast('我是弹出消息', 1000)
    }
  }

}
</script>
