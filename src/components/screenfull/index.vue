<template>
  <div class="icon">
    <div
      class="button"
      @click="click">
      <i
        v-if="isFullscreen"
        class="iconfont icon-suoxiao"></i>
      <i
        v-else
        class="iconfont icon-quanping"></i>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    click () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change () {
      this.isFullscreen = screenfull.isFullscreen
    },
    init () {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy () {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .icon {
    position: relative;
    text-align: center;
    height: 50px;
    padding: 10px;
    .button {
      width: 30px;
      height: 30px;
      line-height: 0;
      position: relative;
      &:hover {
        .iconfont {
          color: #409EFF;
        }
      }
      .iconfont {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 22px;
        color: #666666;
        cursor: pointer;
      }
    }
  }
</style>
