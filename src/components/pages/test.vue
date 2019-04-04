<template>
  <div id="app">
    <!-- 弹框提示 -->
    <toast></toast>
    <!-- loading -->
    <loading></loading>
  </div>
</template>

<script>
import toast from '../common/toast/toast';
import loading from '../common/loading/loading';
export default {
  components: {toast, loading}
}
</script>
