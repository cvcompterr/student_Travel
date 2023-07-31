<template>
  <div class="recommandContainer">
    <div class="recommandHeader"><Navigation /></div>
    <div class="recommandBody">
      <div class="BodyLeft">
        <div class=""></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navigation from "@/components/navigation.vue";
</script>

<style>
.recommandBody {
  height: 85vh;
  width: 30vh;
  margin: 30px 40px;
  border: 3px solid pink;
  border-radius: 1.3248rem;
  -webkit-box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.2208rem 2.208rem 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
</style>