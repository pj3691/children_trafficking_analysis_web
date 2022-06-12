<template>
        <div><ve-pie :data="chartData"></ve-pie></div>
</template>

<style>
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}

.border-box-content {
    color: rgb(66, 185, 131);
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      }
    }
  }
}
</script>
