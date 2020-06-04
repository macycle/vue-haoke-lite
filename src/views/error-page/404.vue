<template>
  <div class="error-page">
    <div class="inner">
      <div class="icon">
        <img src="./images/404.png" alt="404">
      </div>
      <p>哎呀...您访问的页面不存在</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .error-page {
    height: 100%;
    background: #eeeeee;
    .inner {
      position: relative;
      top: 30%;
      text-align: center;
      .icon {
        img {
          width: 160px;
          height: 160px;
        }
      }
      p {
        padding: 10px 0 0;
        line-height: 30px;
        font-size: 24px;
        color: #999999;
      }
    }
  }
</style>
