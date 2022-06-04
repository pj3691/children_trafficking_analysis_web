<template >
  <div id="app">
     <router-view/>
  <el-container>
    <el-header>
      <div class="div" >  儿童拐卖分析及预警系统</div>
      <div class="div2">114514</div>
    </el-header>
  </el-container>
  <el-container>
    <el-aside width="296px">
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
          <router-link class="list-group-item " to="/DataAnalysis"><el-menu-item index="3-1">选项1</el-menu-item></router-link>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-menu-item index="3-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-menu-item-group>
          <el-menu-item index="1-1"><i class="el-icon-setting"></i>选项1</el-menu-item>
        </el-menu-item-group>
    </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
  </div>
</template>

<style>
.div{
  text-align:inherit;
  width:296px ;
  line-height: 60px;
  background-color: #293AA7;
  float: left;
  color: aliceblue;
}

.div2{
  text-align: center;
  width:1620px ;
  line-height: 60px;
  background-color: #3E52C1;
  float: left;
  color: aliceblue;
}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-aside {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 980px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 980px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
