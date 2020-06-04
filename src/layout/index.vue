<template>
  <div class="wrapper" :class="classObj">
    <sidebar class="sidebar" />
    <div class="container">
      <div class="topper">
        <menubar class="menubar" />
        <bread-crumb class="bread-crumb" />
      </div>
      <div class="content">
        <app-main class="context" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { sidebar, menubar, breadCrumb, appMain } from './components'

export default {
  name: 'Layout',
  components: {
    sidebar,
    menubar,
    breadCrumb,
    appMain
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    classObj () {
      return {
        '': !this.sidebar.opened,
        'opend': this.sidebar.opened
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .wrapper {
    position: relative;
    &.opend {
      .sidebar {
        width: 60px;
      }
      .container {
        margin: 0 0 0 60px;
      }
    }
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    width: 200px;
    background: #304156;
    transition: all .2s ease;
  }

  .container {
    position: relative;
    margin: 0 0 0 200px;
    transition: all .2s ease;
  }

  .topper {
    position: relative;
    z-index: 2;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    .menubar {
      position: relative;
      z-index: 2;
      height: 50px;
      background: #ffffff;
    }
    .bread-crumb {
      height: 45px;
      background: #f5f5f5;
    }
  }

  .content {
    min-height: calc(100vh - 90px);
    padding: 12px;
    background: #f9f9f9;
    .context {
      position: relative;
    }
  }
</style>
