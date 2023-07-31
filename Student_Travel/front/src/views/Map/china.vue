<template>
  <div id="main"></div>
</template>
<script>
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
import chinaJson from "@/utils/utils/china.json";
export default {
  setup() {
    const { proxy } = getCurrentInstance(); // 获取config配置

    // value 5A景点的个数
    var dataList = [
      { name: "南海诸岛", value: 0 },
      { ename: "beijing", name: "北京", value: 8 },
      { ename: "tianjin", name: "天津", value: 2 },
      { ename: "shanghai", name: "上海", value: 4 },
      { ename: "chongqing", name: "重庆", value: 11 },
      { ename: "hebei", name: "河北", value: 11 },
      { ename: "henan", name: "河南", value: 15 },
      { ename: "yunnan", name: "云南", value: 9 },
      { ename: "liaoning", name: "辽宁", value: 6 },
      { ename: "heilongjiang", name: "黑龙江", value: 6 },
      { ename: "hunan", name: "湖南", value: 11 },
      { ename: "anhui", name: "安徽", value: 12 },
      { ename: "shandong", name: "山东", value: 14 },
      { ename: "xinjiang", name: "新疆", value: 17 },
      { ename: "jiangsu", name: "江苏", value: 25 },
      { ename: "zhejiang", name: "浙江", value: 20 },
      { ename: "jiangxi", name: "江西", value: 14 },
      { ename: "hubei", name: "湖北", value: 14 },
      { ename: "guangxi", name: "广西", value: 9 },
      { ename: "gansu", name: "甘肃", value: 7 },
      { ename: "shanxi", name: "山西", value: 10 },
      { ename: "neimenggu", name: "内蒙古", value: 6 },
      { ename: "shanxi1", name: "陕西", value: 12 },
      { ename: "jilin", name: "吉林", value: 7 },
      { ename: "fujian", name: "福建", value: 10 },
      { ename: "guizhou", name: "贵州", value: 9 },
      { ename: "guangdong", name: "广东", value: 15 },
      { ename: "qinghai", name: "青海", value: 4 },
      { ename: "xizang", name: "西藏", value: 5 },
      { ename: "sichuan", name: "四川", value: 16 },
      { ename: "ningxia", name: "宁夏", value: 4 },
      { ename: "hainan", name: "海南", value: 6 },
      { name: "台湾", value: 0 },
      { ename: "xianggang", name: "香港", value: 0 },
      { ename: "aomen", name: "澳门", value: 0 },
    ];
    // 初始化 echarts
    function initEchart() {
      var myChart = proxy.echarts.init(document.getElementById("main"));
      proxy.echarts.registerMap("china", chinaJson); // 注册地图
      var option = {
        tooltip: {
          //数据格式化
          formatter: function (params, e) {
            if (params.value === 0) {
              return (
                params.seriesName + "<br />" + params.name + "：" + "数据暂缺"
              );
            } else {
              return (
                params.seriesName + "<br />" + params.name + "：" + params.value
              );
            }
          },
          dataZoom: {
            type: "inside",
          },
        },
        // 图例
        visualMap: {
          min: 0,
          max: 20,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#e0ffff", "#2f8277"], //取值范围的颜色
          },
          show: true, //图注
        },
        geo: {
          map: "china", //引入地图数据
          roam: true, //不开启缩放和平移
          zoom: 1.2, //视角缩放比例
          label: {
            normal: {
              show: true,
              fontSize: "11",
              color: "rgba(0.8,0.8,1)",
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.5)",
            },
            emphasis: {
              //高亮的显示设置
              areaColor: "skyblue", //鼠标选择区域颜色
              shadowOffsetX: 10,
              shadowOffsetY: 10,
              shadowBlur: 50,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        // 鼠标悬浮提示框
        series: [
          {
            name: "省份",
            type: "map",
            geoIndex: 0,
            data: dataList,
          },
        ],
      };
      myChart.setOption(option);
      myChart.on("click", function (params) {
        if (!params.data.ename) {
          alert("暂无" + params.name + "地图数据");
          return;
        }
        // router.push({
        //   path: "/province",
        //   query: { provinceName: params.data.ename, province: params.name },
        // });
        else {
          alert(`${params.name}`);
        }
      });
    }
    onMounted(() => {
      initEchart();
    });
  },
};
</script>
<style scoped>
#main {
  height: 100%;
  width: 100%;
  margin: auto;
  margin-left: 10px;
}
</style>