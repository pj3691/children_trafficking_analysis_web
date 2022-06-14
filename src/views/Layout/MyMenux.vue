<template>
    <div >
      <div class="div2">
           <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template v-slot:title><i class="el-icon-setting"></i>数据分析</template>
        <el-menu-item-group>
          <router-link  to="/DataAnalysis"><el-menu-item index="1-1">数据统计</el-menu-item></router-link>
          <el-menu-item index="1-2">影响因子分析</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template v-slot:title><i class="el-icon-setting"></i>时空分析</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">热力图分析</el-menu-item>
          <el-menu-item index="2-2">热点分析</el-menu-item>
          <router-link  to="/MapPage"><el-menu-item index="2-3">拐卖路线分析</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="3"><i class="el-icon-setting"></i>预警与预测</el-menu-item>
      </el-menu-item-group>
            <el-menu-item-group>
        <el-menu-item index="4"><i class="el-icon-setting"></i>辅助决策</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="5">
        <template v-slot:title><i class="el-icon-setting"></i>数据管理</template>
        <el-menu-item-group>
          <router-link  to="/CaseEntry"><el-menu-item index="5-1">案情录入</el-menu-item></router-link>
          <el-menu-item index="5-2">案情查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="6"><i class="el-icon-setting"></i>同步状态</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="7"><i class="el-icon-setting"></i>系统设置</el-menu-item>
      </el-menu-item-group>
    </el-menu>
      </div>
    <div class="div" ><router-view></router-view></div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.div{
  text-align:center;
  width:85% ;
  height: 530px;
  background-color: #a1abe8;
  color: aliceblue;
  float: left;
  position: relative;
  overflow-x:hidden;
  overflow-y:auto;
}
.div2{
  text-align:center;
  width:15% ;
  line-height: 100px;
  background-color: #293AA7;
  color: aliceblue;
  float: left;
}
</style>
