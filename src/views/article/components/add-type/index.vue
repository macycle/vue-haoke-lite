<template>
  <el-dialog
    title="添加"
    width="500px"
    :visible.sync="isVisible"
    :before-close="handleClose">
    <el-form
      ref="form"
      class="form"
      :model="form"
      :rules="rules">
      <el-form-item
        label="TAGKEY："
        prop="tagkey">
        <el-input v-model="form.tagkey" maxLength="10"></el-input>
      </el-form-item>
      <el-form-item
        label="标题："
        prop="title">
        <el-input v-model="form.title" maxLength="20"></el-input>
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
</template>

<script>
export default {
  name: 'AddOrEditType',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    element: {
      type: Object,
      default () {
        return {
          tagkey: '',
          title: ''
        }
      }
    }
  },
  data () {
    return {
      loading: false,
      form: {},
      rules: {}
    }
  },
  created () {
    // 0
  },
  watch: {
    isVisible (newVal, oldVal) {
      this.form = JSON.parse(JSON.stringify(this.element))
    }
  },
  methods: {
    handleClose () {
      this.$confirm('此操作将不保存数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('handleCloseCallback', {})
      }).catch(() => {})
    },
    handleConfirm () {
      this.loading = true
      // 模拟保存数据
      if (this.form.id) {
        setTimeout(() => {
          this.loading = false
          this.$emit('handleConfirmCallback', {
            isNew: true,
            ...this.form
          })
        }, 1000)
      } else {
        setTimeout(() => {
          this.loading = false
          this.$emit('handleConfirmCallback', {
            id: 0,
            ...this.form
          })
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
