<template>
  <el-dropdown class="icon">
    <div class="button">
      <i class="iconfont icon-diqiu"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in langList"
        :key="item.value"
        :disabled="item.value === lang ? true : false">
        <span @click="changeLanguage(item.value)">{{ item.label }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { lang } from './config'

export default {
  name: 'Language',
  data () {
    return {
      langList: lang,
      lang: window.localStorage.getItem('language')
    }
  },
  methods: {
    changeLanguage (lang) {
      this.lang = lang
      this.$i18n.locale = lang
      window.localStorage.setItem('language', lang)
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
        font-size: 24px;
        color: #666666;
        cursor: pointer;
      }
    }
  }
</style>
