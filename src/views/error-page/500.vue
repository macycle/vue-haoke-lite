<template>
  <div class="error-page">
    <div class="inner">
      <div class="text">
        <img src="@/assets/logo.png" alt="" />
        <h3><b>500</b>. That’s an error.</h3>
        <p>The requested url was not found on this server. That’s all we know.</p>
      </div>
      <div class="icon">
        <img src="./images/500.png" alt="404">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .error-page {
    height: 100%;
    background: #ffffff;
    .inner {
      position: relative;
      top: 30%;
      left: 50%;
      width: 600px;
      margin: 0 0 0 -300px;
      overflow: hidden;
      .text {
        float: left;
        width: 400px;
        img {
          display: block;
          width: 40px;
          margin: 0 0 40px 0;
        }
        h3 {
          padding: 0 0 20px;
          line-height: 30px;
          font-size: 16px;
          font-weight: normal;
          color: #999999;
          b {
            color: #333333;
          }
        }
        p {
          line-height: 24px;
          font-size: 16px;
        }
      }
      .icon {
        float: right;
        img {
          width: 171px;
          height: 213px;
        }
      }
    }
  }
</style>
