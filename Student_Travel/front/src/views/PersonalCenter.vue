<template>
  <div class="personCenter">
    <div class="personCenterheader"><Navigation /></div>
    <div class="personCenterBody">
      <div class="information_navigation">
        <div class="avatar">
          <img
            src="@/assets/showPage_picture/liruinan.jpg"
            class="avatar_picture"
          />
          <div class="username">用户名：{{ personalId }}</div>
          <button class="changeAvatar" @click="changeAvatar">修改头像</button>
          <hr class="leftLine" />
        </div>
        <div class="changeRouter">
          <p class="router_iter">
            <router-link to="/personal_center/reward">已获得奖励</router-link>
          </p>
          <p class="router_iter">
            <router-link to="/personal_center/clocked"
              >已打卡的景点</router-link
            >
          </p>
          <p class="router_iter">
            <router-link to="/personal_center/recommanded"
              >已发布的评论</router-link
            >
          </p>
          <p class="router_iter">
            <router-link to="/personal_center/friends">好友列表</router-link>
          </p>
          <p class="router_iter">
            <router-link to="/personal_center/changeMessage"
              >修改信息</router-link
            >
          </p>
        </div>
      </div>
      <div class="routerShow">
        <div>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </div>
      <div class="memory">
        <p class="memoryHead">旅行回忆</p>
        <div class="memoryBody">
          <div class="memoryItem">
            <div class="pinctureBox1">
              <img src="@/assets/background_pic/1.png" class="img1" />
              <p class="pictureIntroduce1">
                您于{{ picturemessage[0].data }}在{{
                  picturemessage[0].address
                }}记录此照片erijednsfn sandsas时代哦还是红三代啥是啥的撒
              </p>
            </div>
          </div>
          <hr />
          <div class="memoryItem">
            <div class="pinctureBox2">
              <img
                src="@/assets/background_pic/VCG211272735817.jpg"
                class="img2"
              />
              <p class="pictureIntroduce2">
                您于{{ picturemessage[1].data }}在{{
                  picturemessage[1].address
                }}记录此照片记录此照片erijednsfn sandsas时代哦还是红三代啥
              </p>
            </div>
          </div>
        </div>
        <div class="memoryBottom">
          <input type="radio" name="select" id="slide_1" checked />
          <input type="radio" name="select" id="slide_2" />
          <input type="radio" name="select" id="slide_3" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navigation from "@/components/navigation.vue";
let personalId = "李瑞楠";
let picturemessage = [
  {
    data: "2023年5月9日",
    address: "故宫",
  },
  {
    data: "2022年2月9日",
    address: "泰山",
  },
];
const changeAvatar = function () {
  alert("改泥马勒戈壁，不准该");
};
</script>

<style scoped>
.personCenterBody {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* border: 2px solid black; */
}
.information_navigation {
  height: 85vh;
  width: 30vh;
  margin: 30px 40px;
  /* border: 3px solid pink; */
  border-radius: 1.3248rem;
  -webkit-box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.avatar {
  padding: 0 24px 0px 24px;
}
.avatar_picture {
  width: 100px;
  height: 100px;
  margin: 50px 50px 30px 30px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
}
.changeAvatar {
  font-size: 12px;
  color: #000;
  border: solid 1px #e0e0e0;
  border-radius: 15px;
  line-height: 30px;
  padding: 0 20px;
  font-size: 1.17em;
  margin: 25px 34px;
}
.changeAvatar:hover {
  background-color: #e0e0e0;
}
.username {
  font-size: 16px;
  text-align: center;
}
.leftLine {
  margin: 1px;
  border: none;
  border-bottom: solid 1px #a2a4a8;
}
.changeRouter {
  width: 100%;
  height: 100vh;
  /* border: 3px solid pink; */
}
.router_iter {
  /* border: 2px solid orange; */
  margin: 15px auto;
  height: 3rem;
  padding: 0 1.3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 16px;
}
.router_iter:hover {
  background-color: #e0e0e0;
}
.routerShow {
  background: #fff;
  -webkit-box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  border: 3px solid pink;
  height: 85vh;
  width: 90vh;
  margin: 30px 0px;
}
.memory {
  background: #fff;
  -webkit-box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  border: 3px solid pink;
  height: 85vh;
  width: 70vh;
  margin: 30px 30px;
}
.memoryHead {
  height: 8vh;
  background: #1c9ae4;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2da6ec),
    to(#5bd4ff)
  );
  border-radius: 12px;
  background-image: linear-gradient(90deg, #2da6ec 0%, #5bd4ff 100%);
  font-size: 20px;
  text-align: center;
  line-height: 8vh;
}
.memory_text {
  font-size: 16px;
}
.memoryBody {
  height: 70vh;
  width: 100%;
  margin: 10px auto;
  padding: 6px;
  /* border: 3px solid orange; */
}
.memoryItem {
  height: 34vh;
  width: 100%;
  /* border: 1px solid blue; */
}

.pinctureBox1 {
  width: 70%;
  height: 90%;
  margin: 10px auto;
  position: relative;
}
.img1 {
  position: absolute;
  top: -3px;
  left: -70px;
}
.pinctureBox2 {
  width: 70%;
  height: 90%;
  margin: 25px auto;
  position: relative;
}
.img2 {
  position: absolute;
  top: -3px;
  right: -70px;
}
img {
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.pictureIntroduce2 {
  height: 100%;
  width: 15vh;
  /* border: 1px solid yellow; */
  font-size: 20px;
  position: absolute;
  left: -60px;
}
.pictureIntroduce1 {
  height: 100%;
  width: 15vh;
  /* border: 1px solid yellow; */
  font-size: 20px;
  position: absolute;
  right: -60px;
}
.clear {
  clear: both;
}

.memoryBottom {
  width: 100%;
  height: 3vh;
  margin: 2px auto;
  padding: 5px 185px 0px 185px;
  /* border: 1px solid green; */
}
input {
  margin: 0px 10px 0px 20px;
}
</style>