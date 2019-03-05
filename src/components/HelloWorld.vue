<template>
  <div class="interact-page">
    <div class="main-item">
      <div class="top">
          <img class="user-avatar" src="../assets/logo.png" alt="">
        <span class="zyb">某产品</span>
        <!-- <span class="dot">.</span> -->
        <span class="count">累计完成<span class="num">6</span>次玩耍</span>
      </div>
      <div class="bottom">
        <div class="time">01月18日/18:03:21 提交</div>
        <div class="praise">
          <div class="praise-teacher">
            <img class="icon" src="../assets/logo.png" alt="">
            <span>白杨</span>
          </div>
          <div class="praise-student">
            <img class="icon" alt="" src="../assets/logo.png">
            <span>点赞哦哦102</span>
          </div>
        </div>
      </div>
      <div class="praise-list">
        <div class="list-left">
          <img class="icon" alt="" src="../assets/logo.png">
        </div>
        <div class="list-right">
          <span>张大勺</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
          <span>、林晓丽</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      avatarUrl: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .interact-page {
    .main-item {
      margin: 20px;
      padding: 24px;
      border-radius:8px;
      // box-shadow:0px 2px 15px 0px rgba(0,0,0,0.06);
      box-shadow: 2px 2px 15px rgba(0,0,0,0.1);
      .top {
        .user-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .zyb {
          padding-left: 24px;
          font-size: 32px;
          font-weight: 700;
          color: #333333;
          vertical-align: middle;
        }
        /* .dot {
          padding: 0 10px 0 20px;
          vertical-align: middle;
        } */
        .count {
          font-size: 24px;
          color: #999999;
          margin-left: 16px;
          padding-left: 10px;
          position: relative;
          vertical-align: middle;
          .num {
            padding: 0 8px;
            font-size: 32px;
            color: #4CC760;
          }
          &::before {
            content: '.';
            position: absolute;
            left: 0px;
            top: -8px;
            color: #4CC760;
          }
        }
      }
      .bottom {
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        color: #999999;
        .praise {
          display: flex;
          .icon {
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
          .praise-teacher {
            color: #FB7F2D;
          }
          .praise-student {
            padding-left: 24px;
          }
          .praise-active {
            color: #4CC760;
          }
        }
      }
      .praise-list {
        margin-top: 24px;
        padding-top: 24px;
        border-top: 1px solid #D8D8D8;
        display: flex;
        .list-right {
          font-size: 24px;
          color: #666666;
          padding-left: 16px;
        }
        .icon {
          width: 20px;
          height: 20px;
          vertical-align: top;
          padding-top: 6px;
        }
      }
    }
  }
</style>
