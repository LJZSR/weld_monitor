<template>
  <div class="sound">
    <h1>SOUND SIGNAL MONITOR</h1>
    <img src="../assets/Sound/sound_sensor.jpg">
    <el-row>
      <el-col :span="12">
        <div>
          <h2>S-F1</h2>
          <img src="../assets/Sound/S-F1.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>S-E</h2>
          <img src="../assets/Sound/S-E.png">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <h2>S-F2</h2>
          <img src="../assets/Sound/S-F2.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>S-A</h2>
          <img src="../assets/Sound/S-A.png">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <h2>S-F3</h2>
          <img src="../assets/Sound/S-F3.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h2>S-Std</h2>
          <img src="../assets/Sound/S-Std.png">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <h2>S-F4</h2>
          <img src="../assets/Sound/S-F4.png">
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          
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
