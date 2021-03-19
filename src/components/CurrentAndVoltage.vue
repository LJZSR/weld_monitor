<template>
  <div>
    <h1>CURRENT AND VOLTAGE SIGNAL MONITOR</h1>
    <img src="../assets/CurrentAndVoltage/current_voltage_sensor.jpg">
    <el-row>
      <el-col :span="12">
        <div>
          <h2>a-E</h2>
          <img src="../assets/CurrentAndVoltage/a-E.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>c-E</h2>
          <img src="../assets/CurrentAndVoltage/c-E.png">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <h2>a-A</h2>
          <img src="../assets/CurrentAndVoltage/a-A.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>c-A</h2>
          <img src="../assets/CurrentAndVoltage/c-A.png">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <h2>a-Std</h2>
          <img src="../assets/CurrentAndVoltage/a-Std.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>c-Std</h2>
          <img src="../assets/CurrentAndVoltage/c-Std.png">
        </div>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
export default {
  name: 'Sound',
}
</script>

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