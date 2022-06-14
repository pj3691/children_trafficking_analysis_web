<template>
  <div>
    <el-col :span="8"><div class="grid-content bg-purple" style="height:260px"><div class="divh"><ve-pie :data="chartData" :legend-visible="ture" width="290px" height="300px" ></ve-pie></div></div></el-col>
    <div class="divh"><ve-line :data="chartData2" :tooltip-visible="ture" :legend-visible="ture" width="290px" height="300px" > </ve-line></div>
  </div>
</template>

<style>
.divh{
  width: 300px;
  height: 300px;
  float: left;
}
</style>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1300 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },
      chartData2: {
        columns: ['日期', '成本', '利润'],
        rows: [
          { 日期: '1月1日', 成本: 15, 利润: 12 },
          { 日期: '1月2日', 成本: 12, 利润: 25 },
          { 日期: '1月3日', 成本: 21, 利润: 10 },
          { 日期: '1月4日', 成本: 41, 利润: 32 },
          { 日期: '1月5日', 成本: 31, 利润: 30 },
          { 日期: '1月6日', 成本: 71, 利润: 55 }
        ]
      }
    }
  },
  watch: {
    activeName (v) {
      this.$nextTick(_ => {
        this.$refs[`chart${v}`].echarts.resize()
      })
    }
  }
}
</script>
