<template>
  <div class="ClockContainer">
    <div class="Clockbody">
      <div class="First_column">
        <div class="Item">
          <div class="item_picture">
            <img src="" />
          </div>
          <p class="introduce">{{ addressName[0].name }}</p>
        </div>
        <div class="Item">
          <div class="item_picture">
            <img src="@/assets/background_pic/VCG211333046363.jpg" />
          </div>
          <p class="introduce">{{ addressName[1].name }}</p>
        </div>
        <div class="Item">
          <div class="item_picture">
            <img src="@/assets/background_pic/VCG41N1008293780.jpg" />
          </div>
          <p class="introduce">{{ addressName[2].name }}</p>
        </div>
      </div>
      <div class="Second_column">
        <div class="Item">
          <div class="item_picture">
            <img src="@/assets/background_pic/VCG211326073346.jpg" />
          </div>
          <p class="introduce">{{ addressName[3].name }}</p>
        </div>
        <div class="Item">
          <div class="item_picture">
            <img src="@/assets/background_pic/VCG211327264369.jpg" />
          </div>
          <p class="introduce">{{ addressName[4].name }}</p>
        </div>
        <div class="Item">
          <div class="item_picture">
            <img src="@/assets/background_pic/VCG211330400035.jpg" />
          </div>
          <p class="introduce">{{ addressName[5].name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let addressName = [
  {
    name: "北京故宫博物馆",
  },
  {
    name: "河南省白马寺",
  },
  {
    name: "河北省避暑山庄",
  },
  {
    name: "福建省黄厝海滩",
  },
  {
    name: "江西省庐山",
  },
  {
    name: "云南省香格里拉",
  },
];
</script>

<style scoped>
.ClockContainer {
  width: 100%;
  height: 100%;
}
.Clockbody {
  width: 100%;
  height: 82vh;
  /* border: 1px solid orange; */
}
.First_column {
  height: 40vh;
  width: 100%;
  /* border: 2px solid green; */
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.Second_column {
  height: 40vh;
  width: 100%;
  margin: 10px auto;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.Item {
  height: 38vh;
  width: 35vh;
  margin: 5px 10px 3px 10px;
  border: 2px solid blue;
  background-color: #ebe8e8;
  border-radius: 1.3248rem;
  -webkit-box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
}
.item_picture {
  height: 80%;
  width: 100%;
  background-color: bisque;
}
.introduce {
  height: 15%;
  width: 90%;
  margin: 3px auto;
  background-color: #d2d1d1;
  border-radius: 1.3248rem;
  -webkit-box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  font-size: 18px;
  text-align: center;
  line-height: 45px;
}
</style>