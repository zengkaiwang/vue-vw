<template>
  <!-- 方案一 -->
  <!-- <div class="loading">
    <div class="donut"></div>
  </div> -->

  <!-- 方案二 -->
  <!-- <div class="donut"></div> -->

  <!-- 方案三 -->
  <!-- <img :style="{ bottom: data.bottom + 'px'}"
    class="loading-icon"
    src="@/assets/loading@2x.png" alt=""> -->

  <!-- 方案四 -->
  <img v-if="showWrap"
    class="loading-icon"
    src="@/assets/loading@2x.png" alt="">

</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="less" scoped>
  .loading-icon {
    width: 36px;
    height: 36px;
    animation: loading 1s linear infinite;
    position: fixed;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  // .loading {
  //   position: fixed;
  //   bottom: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   .donut {
  //     width: 36px;
  //     height: 36px;
  //     border: 3px solid #999999;
  //     border-bottom-color: #fff;
  //     border-radius: 50%;
  //     animation: loading 1s linear infinite;
  //   }
  // }
  // .donut {
  //   width: 36px;
  //   height: 36px;
  //   border: 3px solid #999999;
  //   border-bottom-color: #fff;
  //   border-radius: 50%;
  //   position: fixed;
  //   bottom: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   animation: loading 3s linear infinite;
  // }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
