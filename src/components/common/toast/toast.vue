<template>
  <div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">
    <span>{{text}}</span>
    <span class="score">{{score}}</span>
    <img v-if="iconUrl"
      class="toast-icon"
      :src="iconUrl" alt=""/>
  </div>
</template>

<script>
export default {
  created() {
    // console.log('toast.vue', this.iconUrl);
  }
}
</script>

<style lang="less" scoped>
  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0,0,0,.35);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
    span  {
      vertical-align: middle;
    }
    .score {
      color: #FB7F2D;
    }
    .toast-icon {
      width: 40px;
      height: 40px;
      margin-left: 12px;
      vertical-align: middle;
    }
  }
  .fadein {
    animation: animate_in 0.25s;
  }
  .fadeout {
    animation: animate_out 0.25s;
    opacity: 0;
  }
  @keyframes animate_in {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
