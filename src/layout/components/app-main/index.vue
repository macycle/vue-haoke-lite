<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="less" scoped>

</style>
