<template>
  <div>
    <el-card shadow="never">
      <div
        slot="header"
        class="thead">
        <h2>{{ $t('sidebar.profile') }}</h2>
      </div>
      <div class="tbody">
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-width="120px">
          <el-form-item
            prop="sex"
            :label="$t('profile.sex') + '：'">
            <el-switch
              v-model="form.sex"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="(data)=>{onChangeSwitch(data, 15)}">
            </el-switch>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loading"
              @click="onSubmit('numberValidateForm')">{{ $t('common.confirmModification') }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      loading: false,
      form: {
        sex: 1
      },
      rules: {}
    }
  },
  methods: {
    onChangeSwitch (a, b) {
      console.log(a)
      console.log(b)
    }
  }
}
</script>
