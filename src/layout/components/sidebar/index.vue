<template>
  <div>
    <logo />
    <navi />
  </div>
</template>

<script>
import logo from './logo.vue'
import navi from './navi.vue'

export default {
  name: 'Sidebar',
  components: {
    logo,
    navi
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>

</style>
