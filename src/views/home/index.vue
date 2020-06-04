<template>
  <div class="">
    <el-carousel class="slider">
      <el-carousel-item
        v-for="(item, index) in advList"
        :key="index">
        <img :src="item.imgsrc" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="magic">
      <dl class="list">
        <dd
          class="item"
          v-for="(item, index) in magicList"
          :key="index">
          <router-link
            class="link"
            :to="item.url">
            <img :src="item.icon" alt="" />
            <h3>{{item.title}}</h3>
          </router-link>
        </dd>
      </dl>
    </div>

    <div class="group">
      <div class="head">
        <h2>租房小组</h2>
        <router-link
          class="mo"
          to="/">更多</router-link>
      </div>
      <dl class="list">
        <dd
          class="item"
          v-for="(item, index) in groupList"
          :key="index">
          <router-link
            class="link"
            :to="item.url">
            <img :src="item.icon" alt="" />
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </router-link>
        </dd>
      </dl>
    </div>

    <div class="news">
      <div class="head">
        <h2>最新资讯</h2>
      </div>
      <dl class="list">
        <dd
          class="item"
          v-for="(item, index) in newsList"
          :key="index">
          <router-link
            class="link"
            :to="'/house/detail?id=' + item.id">
            <img :src="item.imgsrc" alt="" />
            <div class="exp">
              <h3>{{item.tags}}|{{item.title}}</h3>
              <ul>
                <li>{{item.source}}</li>
                <li>{{item.date}}</li>
              </ul>
            </div>
          </router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      advList: [
        {
          imgsrc: require('@/assets/home/a1.png'),
          url: ''
        },
        {
          imgsrc: require('@/assets/home/a2.png'),
          url: ''
        },
        {
          imgsrc: require('@/assets/home/a3.png'),
          url: ''
        }
      ],
      magicList: [
        {
          icon: require('@/assets/home/b1.png'),
          title: '整租',
          url: ''
        },
        {
          icon: require('@/assets/home/b1.png'),
          title: '合租',
          url: ''
        },
        {
          icon: require('@/assets/home/b1.png'),
          title: '地图找房',
          url: ''
        },
        {
          icon: require('@/assets/home/b1.png'),
          title: '发布房源',
          url: ''
        }
      ],
      groupList: [
        {
          icon: require('@/assets/home/c1.png'),
          title: '家住回龙观',
          desc: '归属的感觉',
          url: ''
        },
        {
          icon: require('@/assets/home/c2.png'),
          title: '宜居四五环',
          desc: '大都市生活',
          url: ''
        },
        {
          icon: require('@/assets/home/c3.png'),
          title: '喧嚣三里屯',
          desc: '繁华的背后',
          url: ''
        },
        {
          icon: require('@/assets/home/c4.png'),
          title: '比邻十号线',
          desc: '地铁心连心',
          url: ''
        }
      ],
      newsList: [
        {
          id: 1001,
          imgsrc: require('@/assets/house/a1.png'),
          title: '安贞西里 三室一厅 河间的古雅别院',
          tags: '置业选择',
          source: '新华网',
          date: '2020-06-04'
        },
        {
          id: 1001,
          imgsrc: require('@/assets/house/a2.png'),
          title: '大理王宫 苍山洱海间的古雅别院',
          tags: '置业选择',
          source: '腾讯网',
          date: '2020-06-03'
        },
        {
          id: 1001,
          imgsrc: require('@/assets/house/a3.png'),
          title: '安居小屋 花园洋房 清新别野',
          tags: '置业选择',
          source: '安居网',
          date: '2020-06-01'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .slider {
    position: relative;
    /deep/ .el-carousel__container {
      height: 200px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .magic {
    position: relative;
    background: #ffffff;
    .list {
      position: relative;
      padding: 15px 0;
      overflow: hidden;
    }
    .item {
      float: left;
      width: 25%;
    }
    .link {
      display: block;
      text-align: center;
      &:active {
        opacity: .8;
      }
      img {
        width: 50px;
        height: 50px;
      }
      h3 {
        line-height: 20px;
        font-weight: normal;
      }
    }
  }

  .group {
    position: relative;
    background: #f6f5f6;
    .head {
      position: relative;
      padding: 0 10px;
      margin: 0 0 -10px;
      h2 {
        line-height: 50px;
        color: #333333;
      }
      .mo {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #999999;
        line-height: 30px;
      }
    }
    .list {
      position: relative;
      padding: 5px;
      overflow: hidden;
    }
    .item {
      float: left;
      width: 50%;
    }
    .link {
      display: block;
      position: relative;
      background: #ffffff;
      height: 70px;
      margin: 5px;
      padding: 10px;
      &:active {
        opacity: .8;
      }
      img {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 50px;
        height: 50px;
      }
      h3 {
        line-height: 25px;
        color: #333333;
      }
      p {
        line-height: 20px;
        color: #999999;
      }
    }
  }

  .news {
    position: relative;
    background: #ffffff;
    .head {
      position: relative;
      padding: 0 10px;
      margin: 0 0 -10px;
      h2 {
        line-height: 50px;
        color: #333333;
      }
    }
    .list {
      position: relative;
      padding: 5px;
      overflow: hidden;
    }
    .item {
      position: relative;
    }
    .link {
      display: block;
      position: relative;
      background: #ffffff;
      height: 70px;
      margin: 5px;
      padding: 10px;
      &:active {
        opacity: .8;
      }
      img {
        float: left;
        display: block;
        width: 60px;
        height: 60px;
      }
      .exp {
        margin: 0 0 0 70px;
      }
      h3 {
        line-height: 25px;
        color: #333333;
      }
      p {
        line-height: 20px;
        color: #999999;
      }
    }
  }
</style>
