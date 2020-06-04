<template>
  <dd
    v-if="!item.hidden"
    :class="classObj">
    <div
      class="link"
      v-if="item.children && item.children.length > 1"
      @click="changeNavi">
      <i :class="'iconfont ' + item.meta.icon"></i>
      <span>{{$t('sidebar.' + item.meta.title)}}</span>
      <em
        v-if="!sidebar.opened"
        :class="classAction">
        <i class="iconfont icon-xia"></i>
      </em>
    </div>
    <router-link
      v-else
      class="link"
      :to="item.path">
      <i :class="'iconfont ' + item.meta.icon"></i>
      <span>{{$t('sidebar.' + item.meta.title)}}</span>
    </router-link>
    <template v-if="(item.children && item.children.length > 1) && !sidebar.opened">
      <dl
        v-if="isAction"
        class="drop">
        <template v-for="item2 in item.children">
          <dd
            v-if="!item2.hidden"
            class="item2"
            :key="item2.name">
            <router-link
              class="link2"
              :to="item2.path">
              <span>{{ $t('sidebar.' + item2.meta.title) }}</span>
            </router-link>
          </dd>
        </template>
      </dl>
    </template>
  </dd>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NaviItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isAction: false
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'sidebar'
    ]),
    classObj () {
      return {
        'item': !this.sidebar.opened,
        'item opend': this.sidebar.opened
      }
    },
    classAction () {
      return {
        '': !this.isAction,
        'is-opend': this.isAction
      }
    }
  },
  methods: {
    changeNavi () {
      this.isAction = !this.isAction
      if (this.sidebar.opened) {
        this.$store.dispatch('app/toggleSideBar')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .item {
    position: relative;
    &.opend {
      span {
        display: none;
      }
    }
    .link {
      display: block;
      height: 56px;
      line-height: 56px;
      padding: 0 0 0 18px;
      color: #ffffff;
      opacity: .8;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 100px rgba(0, 0, 0, .2) inset;
      }
      &.router-link-active {
        color: #409eff;
      }
      i {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 24px;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin: 0 0 0 10px;
      }
      em {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 0;
        padding: 13px;
        transition: all .5s ease;
        &.is-opend {
          transform: rotate(180deg);
        }
        i {
          display: block;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .drop {
      position: relative;
      box-shadow: 0 0 100px rgba(0,0,0,.3) inset;
      overflow: hidden;
    }
    .item2 {
      position: relative;
      animation: fadeIn .5s ease;
      .link2 {
        display: block;
        height: 56px;
        line-height: 56px;
        padding: 0 0 0 52px;
        opacity: .8;
        color: #ffffff;
        &:hover {
          box-shadow: 0 0 100px rgba(0,0,0,.5) inset;
        }
        &.router-link-active {
          color: #409eff;
        }
      }
    }
  }
</style>
