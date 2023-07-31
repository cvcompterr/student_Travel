<template>
  <div class="mainpageContainer">
    <div class="navigation"><Navigation /></div>
    <div class="Containerbody">
      <div class="containerLeft">
        <div class="introduce">
          <div class="acctractionsIntroduce">
            <p class="Introducetitle">热门景点TOP排行</p>
            <el-table
              :data="tableData"
              highlight-current-row="true"
              :default-sort="{ prop: 'date', order: 'descending' }"
              class="introduceTable"
            >
              <el-table-column prop="date" label="省份" sortable width="120" />
              <el-table-column prop="name" label="5A景点个数" width="140" />
              <el-table-column
                prop="address"
                label="推荐指数"
                :formatter="formatter"
              />
            </el-table>
          </div>
          <div class="charts">
            <div id="echarts_con" />
          </div>
        </div>
      </div>
      <div class="mapContainer">
        <p class="message">全国各省5A级景区分布</p>
        <div class="map_item"><ChinaVue /></div>
      </div>
      <div class="containerRight">
        <div class="ProviceTable">
          <p class="ProviceTableTitle">省份信息</p>
          <div><ProviceIntroduce /></div>
        </div>
        <div class="ProviceMessage">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "@/components/navigation.vue";
import ChineseMap from "@/components/ChineseMap.vue";
import ProviceIntroduce from "@/components/ProviceIntroduce.vue";
import ChinaVue from "@/views/Map/china.vue";
import { defineComponent, ref, getCurrentInstance, onMounted } from "vue";
const tableData = [
  {
    date: "河北省",
    name: "Tom",
    address: "No.1",
  },
  {
    date: "北京市",
    name: "Tom",
    address: "No.2",
  },
  {
    date: "河南省",
    name: "Tom",
    address: "No.3",
  },
  {
    date: "湖北省",
    name: "Tom",
    address: "No.4",
  },
  {
    date: "福建省",
    name: "Tom",
    address: "No.5",
  },
  {
    date: "浙江省",
    name: "Tom",
    address: "No.6",
  },
  {
    date: "江西省",
    name: "Tom",
    address: "No.7",
  },
];
const { proxy } = getCurrentInstance(); // 获取config配置
const initechatys = function () {
  var echarts_con = proxy.echarts.init(document.getElementById("echarts_con"));
  // 图表随窗口大小自适应
  window.addEventListener("resize", function () {
    echarts_con.resize();
  });
  // import ChinaMap from "@/view/view/Map/china.vue";
  echarts_con.setOption({
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


<style lang="css" scoped>
.mainpageContainer {
  width: 100%;
  height: 100%;
  background-color: #eeefdd;
  background-image: url("@/assets/background_pic/back_shan.a38dd11.png");
  background-size: 100% 100%;
  min-height: 100vh;
}
.Containerbody {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-self: start;
  align-self: flex-start;
}
.mapContainer {
  position: absolute;
  left: 410px;
  top: 55px;
  width: 42%;
  height: 95%;
  /* border: 3px solid yellow; */
}
.containerLeft {
  position: absolute;
  left: 5px;
  top: 55px;
  width: 26%;
  height: 95%;
  /* border: 3px solid pink; */
}
.introduce {
  height: 100%;
  width: 100%;
}
.acctractionsIntroduce {
  height: 55%;
  width: 100%;
  /* border: 3px solid red; */
}
.Introducetitle {
  font-size: 30px;
  text-align: center;
  color: rgba(57, 56, 52, 0.58);
}
.introduceTable {
  margin-top: 3px;
  height: 88%;
  width: 100%;
  overflow: hidden;
  background-color: #eeefdd;
}
.charts {
  border-radius: 8px;
  width: 100%;
  background-color: #eeefdd;
  height: 300px;
}
#echarts_con {
  width: 100%;
  height: 100%;
}
.mapSelect {
  display: flex;
  height: 50px;
  width: 100%;
  /* border: 2px solid pink; */
}
.message {
  font-size: 40px;
  color: black;
  text-align: center;
  margin-top: 10px;
  /* border: 3px solid orange; */
}
.map_item {
  position: absolute;
  top: 30px;
  height: 610px;
  width: 100%;
  /* border: 3px solid blue; */
}
.containerRight {
  height: 100%;
  width: 30%;
  position: absolute;
  margin-top: 10px;
  right: 1px;
  /* border: 2px solid black; */
}
.ProviceTable {
  height: 50%;
  width: 100%;
  /* border: 3px solid red; */
}
.ProviceTableTitle {
  font-size: 30px;
  text-align: center;
  color: rgba(57, 56, 52, 0.58);
}
.provice_Table {
  margin-top: 3px;
  height: 88%;
  width: 100%;
  overflow: hidden;
  background-color: #eeefdd;
}
.ProviceMessage {
  border-radius: 8px;
  width: 100%;
  /* border: 3px solid palevioletred; */
  height: 300px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F38cc220c-4ea4-4f3f-99d6-d0e477c40a32%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693041188&t=9942a538034c85c92e173e199eb33c27");
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>