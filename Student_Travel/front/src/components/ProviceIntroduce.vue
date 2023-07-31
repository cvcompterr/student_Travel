<template>
  <div class="echart">
    <div id="Myecharts_con" />
    <!-- <p class="protitle">{{ ProviceName }}</p>
    <p class="prointroduce">{{ introduce }}</p> -->
  </div>
</template>

<script setup>
import { defineComponent, ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance(); // 获取config配置
let ProviceName = "河北省";
let fiveAtractionNum = 11;
let fourAtractionNum = 12;
let introduce = `  河北省位于中国的华北地区，拥有丰富历史文化和自然风光的省份。这里有许多令人惊叹的景点，吸引着无数游客。
河北省悠久历史，拥有许多古代建筑和文化遗址。位于保定市的承德避暑山庄是中国古代皇家园林的代表之一，被列为世界文化遗产。而位于石家庄市的正定古镇则保存了许多明清时期的建筑，游客可以感受到古代城市的魅力。秦皇岛市的山海关是中国古代的边防要塞，这里有壮丽的长城和蔚蓝的大海，景色壮观。张家口市的坝上草原则是中国北方最大的草原，草原上有着广袤的草地和各种野生动物，是户外爱好者的天堂。
河北省还有一些以文化和艺术为主题的景点。邯郸市的丛台公园是中国四大名园之一，园内有古建筑、湖泊和花草，是休闲散步的好去处。而保定市的野三坡则是一个集山水、溶洞和古建筑于一体的景区，游客可以欣赏到独特的自然风光和人文景观。河北省拥有丰富多样的景点，无论是历史文化遗址、自然风光还是艺术园林，都能让游客流连忘返。无论您是对历史感兴趣还是热爱大自然，河北省都是一个值得一游的地方。`;
const initechatys = function () {
  var Myecharts = proxy.echarts.init(document.getElementById("Myecharts_con"));
  // 图表随窗口大小自适应
  window.addEventListener("resize", function () {
    Myecharts.resize();
  });
  // import ChinaMap from "@/view/view/Map/china.vue";
  Myecharts.setOption({
    title: {
      text: "5A级别景区统计图",
      left: 10,
      top: 10,
      textStyle: {
        //主标题文字样式
        color: "pink", //字体颜色
        fontSize: 15, //字体大小
        // fontStyle:'italic',//斜体
        fontWeight: 500, //加粗
      },
    },
    grid: {
      left: "5%",
      right: "10%",
      top: "20%",
      bottom: "15%",
      containLabel: true,
    },
    tooltip: {
      show: true,
      trigger: "axis",
    },
    xAxis: [
      {
        type: "category",
        axisLine: {
          show: true,
          lineStyle: {
            color: "#9a9a9a",
          },
        },
        axisTick: {
          show: true,
        },
        axisLabel: {
          color: "#9a9a9a",
          margin: 6,
        },
        splitLine: {
          show: false,
        },
        // boundaryGap: ["5%", "5%"],
        data: ["5A", "4A", "3A"],
      },
    ],
    // yAxis: {},
    yAxis: [
      {
        type: "value",

        axisLabel: {
          color: "#9a9a9a",
          margin: 6,
        },
        splitLine: {
          lineStyle: {
            color: "#9a9a9a",
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: "订单量",
        type: "bar",
        stack: "总量",
        symbol: "circle",
        data: [5, 20, 36, 10, 10, 20],
        symbolSize: 6,
        itemStyle: {
          color: "#3a8bef",
          borderColor: "#3a8bef",
          borderWidth: 2,
        },
      },
    ],
  });
};
onMounted(() => {
  initechatys();
});
</script>

<style>
.provicetitle {
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
}
.protitle {
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
}
.prointroduce {
  font-size: 15px;
  text-indent: 30px;
  letter-spacing: 1px;
}
.echart {
  margin: auto;
  border-radius: 8px;
  margin-top: 20px;
  width: 97%;
  background-color: white;
  height: 300px;
}
#Myecharts_con {
  width: 100%;
  height: 100%;
}
</style>