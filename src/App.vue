<template>
  <div id="app">
    <el-header><img src="./assets/sjtu.jpeg"><span>Intelligentized Robotic Welding Technology Laboratory</span></el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="熔池监控" name="first">
          <WeldPool/>
        </el-tab-pane>
        <el-tab-pane label="声音监控" name="second">
          <Sound />
        </el-tab-pane>
        <el-tab-pane label="电流电压监控" name="third">
          <CurrentAndVoltage />
        </el-tab-pane>
        <el-tab-pane label="焊接质量评估" name="fourth">
          <CurrentAndVoltage />
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </div>
</template>

<script>
import WeldPool from './components/WeldPool.vue'
import Sound from './components/Sound.vue'
import CurrentAndVoltage from './components/CurrentAndVoltage.vue'

export default {
  name: 'app',
  components: {
    WeldPool,
    Sound,
    CurrentAndVoltage,
  },
  data() {
    return {
      activeName: 'first'
    };
  },
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.el-header{
  text-align: left;
  font-size: 20px;
  font-weight: bolder;
  margin: 0;
}
.el-header img {
  height: 20px;
}
.el-header span {
  margin: 0 10px;
}
</style>
