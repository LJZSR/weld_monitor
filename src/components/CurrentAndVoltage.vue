<template>
  <div>
    <h1>电流电压信号监控</h1>
    <img src="../assets/CurrentAndVoltage/current_voltage_sensor.jpg">
    <el-row>
      <el-col :span="12">
        <div>
          <div id="c_O" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="v_O" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="a_E" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="c_E" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="a_A" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="c_A" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="a_Std" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="c_Std" class="chart"></div>
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
      let myChart_CO = this.$echarts.init(document.getElementById('c_O'));
      let myChart_VO = this.$echarts.init(document.getElementById('v_O'));
      let myChart_CE = this.$echarts.init(document.getElementById('a_E'));
      let myChart_VE = this.$echarts.init(document.getElementById('c_E'));
      let myChart_CA = this.$echarts.init(document.getElementById('a_A'));
      let myChart_VA = this.$echarts.init(document.getElementById('c_A'));
      let myChart_CStd = this.$echarts.init(document.getElementById('a_Std'));
      let myChart_VStd = this.$echarts.init(document.getElementById('c_Std'));
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
      let option_CO = {};
      option_CO = JSON.parse(JSON.stringify(option));
      option_CO.title.text = "原始电流信号";
      option_CO.xAxis.data = mock.current.Signal.time
      option_CO.series[0].data = mock.current.Signal.value
      let option_VO = {};
      option_VO = JSON.parse(JSON.stringify(option));
      option_VO.title.text = "原始电压信号";
      option_VO.xAxis.data = mock.voltage.Signal.time
      option_VO.series[0].data = mock.voltage.Signal.value
      let option_CE = {};
      option_CE = JSON.parse(JSON.stringify(option));
      option_CE.title.text = "a-E";
      option_CE.xAxis.data = mock.current.E.time
      option_CE.series[0].data = mock.current.E.value
      let option_VE = {};
      option_VE = JSON.parse(JSON.stringify(option));
      option_VE.title.text = "c-E";
      option_VE.xAxis.data = mock.voltage.E.time
      option_VE.series[0].data = mock.voltage.E.value
      let option_CA = {};
      option_CA = JSON.parse(JSON.stringify(option));
      option_CA.title.text = "a-A";
      option_CA.xAxis.data = mock.current.A.time
      option_CA.series[0].data = mock.current.A.value
      let option_VA = {};
      option_VA = JSON.parse(JSON.stringify(option));
      option_VA.title.text = "c-A";
      option_VA.xAxis.data = mock.voltage.A.time
      option_VA.series[0].data = mock.voltage.A.value
      let option_CStd = {};
      option_CStd = JSON.parse(JSON.stringify(option));
      option_CStd.title.text = "a-Std";
      option_CStd.xAxis.data = mock.current.Std.time
      option_CStd.series[0].data = mock.current.Std.value
      let option_VStd = {};
      option_VStd = JSON.parse(JSON.stringify(option));
      option_VStd.title.text = "c-Std";
      option_VStd.xAxis.data = mock.voltage.Std.time
      option_VStd.series[0].data = mock.voltage.Std.value
      myChart_CO.setOption(option_CO);
      myChart_VO.setOption(option_VO);
      myChart_CE.setOption(option_CE);
      myChart_VE.setOption(option_VE);
      myChart_CA.setOption(option_CA);
      myChart_VA.setOption(option_VA);
      myChart_CStd.setOption(option_CStd);
      myChart_VStd.setOption(option_VStd);
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
.el-row img {
  width: 90%;
}
.chart {
  width: 500px;
  margin: auto;
  height: 250px;
}
</style>