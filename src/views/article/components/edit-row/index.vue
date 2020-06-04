<template>
  <div>
    <el-button
      type="text"
      @click="showDialog">修改</el-button>

    <el-dialog
      title="修改"
      width="500px"
      :visible.sync="isVisible"
      :before-close="handleClose">
      <el-form
        ref="form"
        class="form"
        :model="form"
        :rules="rules">
        <el-form-item
          label="标题："
          prop="title">
          <el-input v-model="form.title" maxLength="30"></el-input>
        </el-form-item>
        <el-form-item
          label="标签："
          prop="tag">
          <el-input v-model="form.tag" maxLength="4"></el-input>
        </el-form-item>
        <slot name="tag"></slot>
      </el-form>
      <div
        slot="footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button
          v-loading="loading"
          type="primary"
          @click="handleConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LayerRenameText',
  components: {},
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isVisible: false,
      loading: false,
      form: {},
      rules: {
        title: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入标题'
          }
        ],
        tag: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入标签'
          }
        ]
      }
    }
  },
  methods: {
    showDialog () {
      this.isVisible = true
      this.form = JSON.parse(JSON.stringify(this.element))
    },
    handleClose () {
      this.isVisible = false
    },
    handleConfirm () {
      this.loading = true

      setTimeout(() => {
        // 模拟异步数据
        this.isVisible = false
        this.loading = false
        this.element.title = this.form.title
        this.element.tag = this.form.tag
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
  .form {
    display: block;
    margin: -30px -20px;
    padding: 20px 20px;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
</style>
