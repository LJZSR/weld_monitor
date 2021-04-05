<template>
  <div class="weld-quality">
    <h1>焊接质量评估</h1>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="top_width" class="chart"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <div id="back_width" class="chart"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <div id="classify" class="chart"></div>
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
  name: 'WeldQuality',
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      let myChart_TW = this.$echarts.init(document.getElementById('top_width'))
      let myChart_BW = this.$echarts.init(document.getElementById('back_width'))
      let myChart_Classify = this.$echarts.init(document.getElementById('classify'))
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
          name: 'Width(mm)',
          boundaryGap: false,
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      };
      let option_tw = {};
      option_tw = JSON.parse(JSON.stringify(option));
      option_tw.title.text = "正面焊缝宽度"
      option_tw.xAxis.data = mock.quality.top.time
      option_tw.series[0].data = mock.quality.top.value
      let option_bw = {};
      option_bw = JSON.parse(JSON.stringify(option));
      option_bw.title.text = "背面焊缝宽度"
      option_bw.xAxis.data = mock.quality.back.time
      option_bw.series[0].data = mock.quality.back.value
      let option_classify = {};
      option_classify = JSON.parse(JSON.stringify(option));
      option_classify.yAxis.type = "category";
      option_classify.yAxis.name = "焊缝成型状态类别";
      option_classify.yAxis.data = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6"];
      option_classify.title.text = "焊缝成型状态";
      option_classify.series[0].type = "scatter";
      option_classify.xAxis.data = mock.quality.state.time
      option_classify.series[0].data = mock.quality.state.value
      myChart_TW.setOption(option_tw);
      myChart_BW.setOption(option_bw);
      myChart_Classify.setOption(option_classify);
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