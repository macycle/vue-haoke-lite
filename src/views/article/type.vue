<template>
  <div>
    <div class="opration">
      <el-button
        type="primary"
        @click="showDialog(0)">新增</el-button>
    </div>
    <div>
      <dl>
        <dd
          v-for="(item, index) in list"
          :key="index">
          <span>{{item.id}}</span> -
          <span>{{item.tagkey}}</span> -
          <span>{{item.title}}</span> -
          <el-button
            type="text"
            @click="showDialog(1, item)">修改</el-button>
        </dd>
      </dl>
    </div>

    <add-type-dialog
      :isVisible="isVisible"
      :element="element"
      @handleCloseCallback="handleCloseCallback"
      @handleConfirmCallback="handleConfirmCallback"></add-type-dialog>
  </div>
</template>

<script>
import addTypeDialog from './components/add-type'

export default {
  name: '',
  components: {
    addTypeDialog
  },
  data () {
    return {
      isVisible: false,
      element: {},
      list: [
        {
          id: 1001,
          tagkey: 'news',
          title: '新闻'
        },
        {
          id: 1002,
          tagkey: 'product',
          title: '商品'
        },
        {
          id: 1003,
          tagkey: 'case',
          title: '案例'
        }
      ]
    }
  },
  methods: {
    showDialog (type, obj) {
      this.isVisible = true
      if (type === 1) {
        this.element = obj
      }
    },
    handleCloseCallback (res) {
      this.isVisible = false
      this.element = {}
    },
    handleConfirmCallback (res) {
      this.isVisible = false
      this.element = {}
      if (res.isNew) {
        let target = this.list.find(res2 => {
          return res2.id === res.id
        })
        target.title = res.title
        target.tagkey = res.tagkey
      } else {
        this.list.push(res)
      }
    }
  }
}
</script>
