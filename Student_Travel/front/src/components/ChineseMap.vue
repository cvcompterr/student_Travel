<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, provide } from "vue";
let L = window.L;
let map = {};
// let resultLayer;
let parent = { map: null };
let url =
  "http://182.118.236.79:8090/iserver/services/map-111/rest/maps/Province_R%40China.leaflet";

provide("map", parent);
onMounted(() => {
  console.log(L);
  map = L.map("map", {
    preferCanvas: true,
    center: [30.67, 104.07],
    maxZoom: 18,
    zoom: 12,
  });
  parent.map = map;
  new L.supermap.TiledMapLayer(url, { noWrap: true }).addTo(map);
});
</script>

<style>
.contain {
  width: 300px;
  height: 300px;
}
.picture {
  width: 300px;
  height: 300px;
}
</style>