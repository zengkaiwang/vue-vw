<template>
  <div id="app">
    <!-- 弹框提示 -->
    <toast></toast>
    <!-- loading -->
    <loading :data="loadParams"></loading>
  </div>
</template>

<script>
import toast from '../common/toast/toast';
import loading from '../common/loading/loading';
export default {
  components: {toast, loading},
  data() {
    return {
      loadParams: {
        bottom: 30
      }
    }
  }
}
</script>
