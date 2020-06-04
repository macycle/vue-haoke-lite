<template>
  <div class="clearfix">
    <div class="icon hamburger" @click="toggleSideBar">
      <div class="button">
        <i :class="classObj"></i>
      </div>
    </div>
    <dl class="quick">
      <dd class="item">
        <el-dropdown class="user">
          <div class="avt">
            <img class="avatar" :src="user.avatar" alt="">
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/system/profile">{{ $t('sidebar.profile') }}</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/system/password">{{ $t('sidebar.password') }}</router-link>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span @click="logout">{{ $t('menubar.logout') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </dd>
      <dd class="item">
        <language />
      </dd>
      <dd class="item">
        <screenfull />
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import screenfull from '@/components/screenfull'
import language from '@/components/language'

export default {
  name: 'menubar',
  components: {
    screenfull,
    language
  },
  computed: {
    ...mapGetters([
      'user',
      'sidebar'
    ]),
    classObj () {
      return {
        'iconfont icon-shouqi': !this.sidebar.opened,
        'iconfont icon-zhankai': this.sidebar.opened
      }
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .hamburger {
    float: left;
  }

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

  .quick {
    float: right;
    .item {
      float: right;
      height: 50px;
    }
    .user {
      .avt {
        position: relative;
        padding: 5px;
      }
      .avatar {
        display: block;
        width: 40px;
        height: 40px;
        padding: 2px;
        border: 1px solid #eeeeee;
        cursor: pointer;
      }
    }
  }
</style>
