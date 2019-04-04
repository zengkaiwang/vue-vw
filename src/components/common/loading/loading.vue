<template>
  <div class="donut"></div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .donut {
    width: 36px;
    height: 36px;
    border: 3px solid #999999;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: donut 1s linear infinite;
  }

  @keyframes donut {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
