<template>
  <div class="weld-pool">
    <h1>熔池图像信号监控</h1>
    <img src="../assets/WeldPool/weld_pool_sensor.jpg">
    <br>
    <h2>熔池图像</h2>
    <img src="../assets/WeldPool/weld_pool.jpg" style="width: 15%;">
    <el-row>
      <el-col :span="12">
        <div>
          <div id="wp_V1" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="wp_V2" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="wp_V3" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="wp_V4" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="wp_V5" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="wp_V6" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="wp_V7" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="wp_V8" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="wp_V9" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="wp_V10" class="chart"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mock from '../assets/mock.json'
export default {
  name: 'WeldPool',
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart_V1 = this.$echarts.init(document.getElementById('wp_V1'))
      let myChart_V2 = this.$echarts.init(document.getElementById('wp_V2'))
      let myChart_V3 = this.$echarts.init(document.getElementById('wp_V3'))
      let myChart_V4 = this.$echarts.init(document.getElementById('wp_V4'))
      let myChart_V5 = this.$echarts.init(document.getElementById('wp_V5'))
      let myChart_V6 = this.$echarts.init(document.getElementById('wp_V6'))
      let myChart_V7 = this.$echarts.init(document.getElementById('wp_V7'))
      let myChart_V8 = this.$echarts.init(document.getElementById('wp_V8'))
      let myChart_V9 = this.$echarts.init(document.getElementById('wp_V9'))
      let myChart_V10 = this.$echarts.init(document.getElementById('wp_V10'))
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
      let option_v1 = {};
      option_v1 = JSON.parse(JSON.stringify(option));
      option_v1.title.text = "V1";
      option_v1.xAxis.data = mock.weldPool.V1.time
      option_v1.series[0].data = mock.weldPool.V1.value
      let option_v2 = {};
      option_v2 = JSON.parse(JSON.stringify(option));
      option_v2.title.text = "V2";
      option_v2.xAxis.data = mock.weldPool.V2.time
      option_v2.series[0].data = mock.weldPool.V2.value
      let option_v3 = {};
      option_v3 = JSON.parse(JSON.stringify(option));
      option_v3.title.text = "V3";
      option_v3.xAxis.data = mock.weldPool.V3.time
      option_v3.series[0].data = mock.weldPool.V3.value
      let option_v4 = {};
      option_v4 = JSON.parse(JSON.stringify(option));
      option_v4.title.text = "V4";
      option_v4.xAxis.data = mock.weldPool.V4.time
      option_v4.series[0].data = mock.weldPool.V4.value
      let option_v5 = {};
      option_v5 = JSON.parse(JSON.stringify(option));
      option_v5.title.text = "V5";
      option_v5.xAxis.data = mock.weldPool.V5.time
      option_v5.series[0].data = mock.weldPool.V5.value
      let option_v6 = {};
      option_v6 = JSON.parse(JSON.stringify(option));
      option_v6.title.text = "V6";
      option_v6.xAxis.data = mock.weldPool.V6.time
      option_v6.series[0].data = mock.weldPool.V6.value
      let option_v7 = {};
      option_v7 = JSON.parse(JSON.stringify(option));
      option_v7.title.text = "V1'";
      option_v7.xAxis.data = mock.weldPool.V7.time
      option_v7.series[0].data = mock.weldPool.V7.value
      let option_v8 = {};
      option_v8 = JSON.parse(JSON.stringify(option));
      option_v8.title.text = "V2'";
      option_v8.xAxis.data = mock.weldPool.V8.time
      option_v8.series[0].data = mock.weldPool.V8.value
      let option_v9 = {};
      option_v9 = JSON.parse(JSON.stringify(option));
      option_v9.title.text = "V3'";
      option_v9.xAxis.data = mock.weldPool.V9.time
      option_v9.series[0].data = mock.weldPool.V9.value
      let option_v10 = {};
      option_v10 = JSON.parse(JSON.stringify(option));
      option_v10.title.text = "V4'";
      option_v10.xAxis.data = mock.weldPool.V10.time
      option_v10.series[0].data = mock.weldPool.V10.value
      // 绘制图表
      myChart_V1.setOption(option_v1);
      myChart_V2.setOption(option_v2);
      myChart_V3.setOption(option_v3);
      myChart_V4.setOption(option_v4);
      myChart_V5.setOption(option_v5);
      myChart_V6.setOption(option_v6);
      myChart_V7.setOption(option_v7);
      myChart_V8.setOption(option_v8);
      myChart_V9.setOption(option_v9);
      myChart_V10.setOption(option_v10);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 1.5em;
  margin: 10px 0;
}
h2 {
  font-size: 1.0em;
  margin: 5px 0 0 0;
}
img {
  width: 10%;
}
.el-row {
  margin: 10px 0;
}
.chart {
  margin: auto;
  height: 250px;
}
</style>
