<template>
  <div :class="classObj">
    <img src="@/assets/logo.png" alt="" />
    <h2>Vue Admin Lite</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Logo',
  computed: {
    ...mapGetters([
      'user',
      'sidebar'
    ]),
    classObj () {
      return {
        'logo': !this.sidebar.opened,
        'logo opend': this.sidebar.opened
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .logo {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 0 0 15px;
    background: #2b2f3a;
    overflow: hidden;
    &.opend {
      h2 {
        display: none;
      }
    }
    img {
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      height: 30px;
    }
    h2 {
      display: inline-block;
      vertical-align: middle;
      margin: 0 0 0 10px;
      font-size: 16px;
      color: #ffffff;
    }
  }
</style>
