<template>
  <div class="navigation_container">
    <div class="navigation_header">
      <div class="logo">
        <img src="@/assets/logo/tripadvisor.png" class="logo" />
      </div>
      <ul class="select_item">
        <div class="select_Item">
          <div class="logoContainer">
            <img src="@/assets/logo/mainpage.png" class="mainpagelogo" />
          </div>
          <router-link to="/mainpage">主页面</router-link>
        </div>
        <div class="select_Item">
          <div class="logoContainer">
            <img src="@/assets/logo/search.png" class="mainpagelogo" />
          </div>
          <router-link to="/seacher">景点查询</router-link>
        </div>
        <div class="select_Item">
          <div class="logoContainer">
            <img src="@/assets/logo/recommand.png" class="mainpagelogo" />
          </div>
          <router-link to="/recommended">个性化景点推荐</router-link>
        </div>

        <div class="select_Item">
          <div class="logoContainer">
            <img src="@/assets/logo/travel.png" class="mainpagelogo" />
          </div>
          <router-link to="/traveinformation">出行信息</router-link>
        </div>
        <div class="select_Item">
          <div class="logoContainer">
            <img src="@/assets/logo/checkin.png" class="mainpagelogo" />
          </div>
          <router-link to="/attractionsCheck_in">景点云打卡</router-link>
        </div>
        <div class="select_Item">
          <div class="logoContainer">
            <img src="@/assets/logo/command.png" class="mainpagelogo" />
          </div>
          <router-link to="/comment">发帖评论</router-link>
        </div>
        <div class="select_Item">
          <div class="logoContainer">
            <img src="@/assets/logo/personal.png" class="mainpagelogo" />
          </div>
          <router-link to="/personal_center">个人中心</router-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
</script>

<style scoped>
.navigation_container {
  width: 100%;
  height: 100%;
}
.navigation_header {
  width: 100%;
  height: 48px;
  background-color: #ffffffe0;
  line-height: 48px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
}
.logo {
  width: 130px;
  height: 26px;
  margin-left: 10px;
}
.select_item {
  display: flex;
  height: 48px;
  line-height: 28px;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  margin-left: 480px;
}
.select_Item {
  display: block;
  margin-left: 20px;
  padding: 2px;
  height: 100%;
  text-align: center;
  padding-top: 10px;
  display: flex;
  border-radius: 12px;
}
.select_Item:hover {
  background: #e8e5e5;
}
.logoContainer {
  width: 26px;
  height: 26px;
  margin-right: 5px;
}
.mainpagelogo {
  width: 100%;
  height: 100%;
}
</style>