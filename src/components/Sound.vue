<template>
  <div class="sound">
    <h1>声音信号监控</h1>
    <img src="../assets/Sound/sound_sensor.jpg">
    <el-row>
      <el-col :span="24">
        <div>
          <div id="s_O" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <div id="s_O" class="char"></div>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="s_F1" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div>
            <div id="s_E" class="chart"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="s_F2" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="s_A" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="s_F3" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="s_Std" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="s_F4" class="chart"></div>
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
import mock from '../assets/mock.json'

export default {
  name: 'Sound',
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      let myChart_O = this.$echarts.init(document.getElementById('s_O'));
      let myChart_F1 = this.$echarts.init(document.getElementById('s_F1'));
      let myChart_E = this.$echarts.init(document.getElementById('s_E'));
      let myChart_F2 = this.$echarts.init(document.getElementById('s_F2'));
      let myChart_A = this.$echarts.init(document.getElementById('s_A'));
      let myChart_F3 = this.$echarts.init(document.getElementById('s_F3'));
      let myChart_Std = this.$echarts.init(document.getElementById('s_Std'));
      let myChart_F4 = this.$echarts.init(document.getElementById('s_F4'));
      let option = {
        title: {
          left: 'center',
          text: '',
          textStyle: {
            fontSize: 23,
          }
        },
        xAxis: {
          type: 'category',
          data: [1, 2, 3, 4, 5, 6, 7],
          boundaryGap: false,
          name: 'Time(s)',
          nameTextStyle: {
            fontSize: 10,
          }
        },
        yAxis: {
          type: 'value',
          name: 'Amplitude',
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      };
      let option_O = {};
      option_O = JSON.parse(JSON.stringify(option));
      option_O.title.text = "原始声音信号";
      option_O.xAxis.data = mock.sound.Signal.time;
      option_O.series[0].data = mock.sound.Signal.value;
      let option_F1 = {};
      option_F1 = JSON.parse(JSON.stringify(option));
      option_F1.title.text = "S-F1";
      option_F1.xAxis.data = mock.sound.F1.time
      option_F1.series[0].data = mock.sound.F1.value
      let option_E = {};
      option_E = JSON.parse(JSON.stringify(option));
      option_E.title.text = "S-E";
      option_E.xAxis.data = mock.sound.E.time
      option_E.series[0].data = mock.sound.E.value
      let option_F2 = {};
      option_F2 = JSON.parse(JSON.stringify(option));
      option_F2.title.text = "S-F2";
      option_F2.xAxis.data = mock.sound.F2.time
      option_F2.series[0].data = mock.sound.F2.value
      let option_A = {};
      option_A = JSON.parse(JSON.stringify(option));
      option_A.title.text = "S-A";
      option_A.xAxis.data = mock.sound.A.time
      option_A.series[0].data = mock.sound.A.value
      let option_F3 = {};
      option_F3 = JSON.parse(JSON.stringify(option));
      option_F3.title.text = "S-F3";
      option_F3.xAxis.data = mock.sound.F3.time
      option_F3.series[0].data = mock.sound.F3.value
      let option_Std = {};
      option_Std = JSON.parse(JSON.stringify(option));
      option_Std.title.text = "S-Std";
      option_Std.xAxis.data = mock.sound.Std.time
      option_Std.series[0].data = mock.sound.Std.value
      let option_F4 = {};
      option_F4 = JSON.parse(JSON.stringify(option));
      option_F4.title.text = "S-F4";
      option_F4.xAxis.data = mock.sound.F4.time
      option_F4.series[0].data = mock.sound.F4.value
      myChart_O.setOption(option_O);
      myChart_F1.setOption(option_F1);
      myChart_E.setOption(option_E);
      myChart_F2.setOption(option_F2);
      myChart_A.setOption(option_A);
      myChart_F3.setOption(option_F3);
      myChart_Std.setOption(option_Std);
      myChart_F4.setOption(option_F4);
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.5em;
  margin: 10px 0;
}
h2 {
  font-size: 1.0em;
  margin: 0;
}
img {
  width: 20%;
}
.el-row {
  margin: 10px 0;
}
.chart {
  width: 500px;
  margin: auto;
  height: 250px;
}
</style>
