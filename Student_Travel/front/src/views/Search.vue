<template>
  <div class="seacherContainer">
    <div class="navigation"><Navigation /></div>
    <div class="searcherHeader">
      <div class="seacherInput">
        <el-input v-model="inputcontext" placeholder="请输入要查询的景点" />
      </div>
      <div>
        <el-button
          type="primary"
          round
          class="seacherbutton"
          @click="showMessage"
          >查询</el-button
        >
      </div>
    </div>
    <div class="seacherContainer">
      <div class="seacherContainer_left"></div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "@/components/navigation.vue";
import { ref } from "vue";
const inputcontext = ref("");
const showMessage = function () {
  if (inputcontext.value !== "") {
    alert("我草你妈了个逼");
  }
};
</script>

<style>
.seacherContainer {
  width: 100%;
  height: 100%;
}
.searcherHeader {
  display: flex;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
.seacherInput {
  width: 18%;
}
.seacherbutton {
  margin-left: 10px;
}
.seacherContainer_left {
  width: 700px;
  height: 630px;
  border: 3px solid black;
}
</style>