<template>
  <el-scrollbar class="navi">
    <dl
      background-color="#304156"
      text-color="#ffffff"
      active-text-color="#3792ff">
      <navi-item
        v-for="(item, index) in $matchedRoutes.currentRoute"
        :key="index"
        :item="item" />
    </dl>
  </el-scrollbar>
</template>

<script>
import naviItem from './navi-item.vue'

export default {
  name: 'Menu',
  components: {
    naviItem
  },
  data () {
    return {
      routes: []
    }
  },
  mounted () {
    this.routes = this.$matchedRoutes.currentRoute
  }
}
</script>

<style lang="less" scoped>
  .navi {
    height: calc(100vh - 50px);
  }
</style>
