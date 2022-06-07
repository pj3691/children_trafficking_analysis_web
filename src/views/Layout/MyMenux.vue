<template>
    <div >
      <div class="div2">
       <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template v-slot:title><i class="el-icon-setting"></i>导航一</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template v-slot:title><i class="el-icon-setting"></i>导航二</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template v-slot:title><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <router-link  to="/DataAnalysis"><el-menu-item index="3-1">选项1</el-menu-item></router-link>
          <el-menu-item index="3-1">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-menu-item index="3-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-menu-item-group>
          <el-menu-item index="1-1"><i class="el-icon-setting"></i>选项1</el-menu-item>
        </el-menu-item-group>
    </el-menu>
      </div>
    <div class="div2"><router-view></router-view></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.div{
  text-align:center;
  width:15% ;
  line-height: 100px;
  background-color: #293AA7;
  color: aliceblue;
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
