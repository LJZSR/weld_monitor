<template>
  <div class="weld-pool">
    <h1>WELD POOL IMAGE SIGNAL MONITOR</h1>
    <img src="../assets/WeldPool/weld_pool_sensor.jpg">
    <el-row>
      <el-col :span="12">
        <div>
          <h2>V1</h2>
          <img src="../assets/WeldPool/v1.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>V2</h2>
          <img src="../assets/WeldPool/v2.png">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <h2>V3</h2>
          <img src="../assets/WeldPool/v3.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <h2>V4</h2>
          <img src="../assets/WeldPool/v4.png">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <h2>V5</h2>
          <img src="../assets/WeldPool/v5.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>V6</h2>
          <img src="../assets/WeldPool/v6.png">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'WeldPool',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 1.5em;
  margin: 10px 0;
}
h2 {
  margin: 0;
}
img {
  width: 20%;
}
.el-row {
  margin: 10px 0;
}
.el-row img {
  width: 90%;
}
</style>
