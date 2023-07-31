<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import router from "@/router/index.js";
// let zoomGlobal = window.devicePixelRatio; // 获取缩放 125% -> 1.25    150% -> 1.5
// document.body.style.zoom = 1 / zoomGlobal; // 就去修改页面的缩放比例
</script>

<style>
</style>