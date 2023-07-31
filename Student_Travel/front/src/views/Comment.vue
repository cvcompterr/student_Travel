<template>
  <div class="commentContainer">
    <div class="commentHeader">
      <Navigation />
    </div>
    <div class="commentBody">
      <div class="BodyLeft">
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
          <div class="router_iter">
            <p class="item">
              <router-link to="/comment/topReviews">热门评论</router-link>
            </p>
            <p class="item">
              <router-link to="/comment/guiderecommended">导游推荐</router-link>
            </p>
            <p class="item">
              <router-link to="/comment/myfriends">我的关注</router-link>
            </p>
            <p class="item">
              <router-link to="/personal_center/recommanded"
                >我的评论</router-link
              >
            </p>
          </div>
        </div>
      </div>
      <div class="BodyCenter">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
      <div class="BodyRight">
        <div class="SendComment">
          <router-link to="" class="text"> 我要发评论</router-link>
          <img src="" />
        </div>
        <div class="sign_in">
          <img src="" class="sign_pic" />
          <p class="sign_text">快来签到领取积分吧！</p>
          <button class="SighBtn" @click="getAward">签到</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "@/components/navigation.vue";
let personalId = "徐恒";
const getAward = function () {
  alert("今日已签到，积分加6");
};
</script>
<style>
.commentContainer {
  height: 100%;
  width: 100%;
}
.commentBody {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.BodyLeft {
  height: 85vh;
  width: 30vh;
  margin: 30px 30px;
  margin-left: 70px;
  /* border: 3px solid pink; */
  border-radius: 1.3248rem;
  -webkit-box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.BodyCenter {
  background: #fff;
  -webkit-box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  border: 3px solid pink;
  height: 85vh;
  width: 120vh;
  margin: 30px 0px;
}
.BodyRight {
  background: #fff;
  -webkit-box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  border: 3px solid pink;
  height: 85vh;
  width: 40vh;
  margin: 30px 30px;
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
.router_iter {
  /* border: 2px solid orange; */
  margin: 30px auto;
  height: 3rem;
  /* padding: 0 1.3rem; */
  line-height: 3rem;
  text-align: center;
  font-size: 16px;
}
.item:hover {
  background-color: #e0e0e0;
}
.SendComment {
  width: 90%;
  height: 56px;
  padding: 0 0 0 26px;
  background: #ce0e2d;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 20px auto;
}
.text {
  font-size: 16px;
  color: #fff;
  letter-spacing: 0.16px;
  line-height: 24px;
  flex: 1;
}
.sign_in {
  height: 246px;
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
}
.sign_pic {
  width: 56px;
  height: 56px;
  margin-top: 35px;
}
.sign_text {
  font-size: 12px;
  color: #777;
  letter-spacing: 0.11px;
  line-height: 16px;
  margin-top: 24px;
}
.SighBtn {
  width: 80px;
  height: 32px;
  border: 1px solid #328dff;
  border-radius: 25.5px;
  font-size: 12px;
  background: #fff;
  color: #328dff;
  text-align: center;
  margin: 24px 0;
}
</style>