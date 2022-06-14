<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="账号 ：">
    <el-input v-model="form.name" ></el-input>
  </el-form-item>
  <el-form-item label="密码 ：">
    <el-input v-model="form.password" show-password></el-input>
  </el-form-item>
  <el-button type="primary">登录</el-button>
</el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>

</style>
