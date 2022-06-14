<template>
        <div >
          <router-link  to="/"><div class="divcon" width=20%>  儿童拐卖分析及预警系统</div></router-link>
          <div class="divcon2"  width=80%>
            <router-link  to="/LogIn"><div class="divcon3" > 登录</div></router-link>
            <router-link  to="/LogIn"><div class="divcon3" > 注册</div></router-link>
            <div class="divcon4">
                <el-input placeholder="请输入内容" v-model="input4" size="small">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
          </div>
        </div>
</template>

<style>
.divcon{
  text-align: center;
  float: left;
  width: 15%;
  line-height: 100px;
  background-color: #3E52C1;
  color: aliceblue;
}
.divcon2{
  text-align: center;
  float: left;
  width: 85%;
  line-height: 100px;
  background-color: #394278;
  color: aliceblue;
}
.divcon3{
  text-align: center;
  float: right;
  width: 5%;
  background-color: #394278;
  color: aliceblue;
}
.divcon4{
  text-align: center;
  float: right;
  width: 20%;
  line-height: 100px;
  background-color: #394278;
  color: aliceblue;
}
.el-select .el-input {
  width: 50px;
}
</style>

<script>
export default {

}
</script>
