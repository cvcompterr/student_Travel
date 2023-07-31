<template>
  <div class="TopReviewContainer">
    <div class="Topitem">
      <div class="itemContainer">
        <p class="Text"></p>
      </div>
      <div class="itemBottom">
        <div class="BottomLeft"></div>
        <div class="BottomRight"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.TopReviewContainer {
  width: 100%;
  height: 100%;
}
.Topitem {
  display: block;
  width: 100%;
  height: 112px;
  background-color: #fff;
  padding: 24px 0 16px;
  position: relative;
  border: 3px solid orange;
}
.itemBottom {
  margin-top: 16px;
  height: 24px;
  /* width: 100%; */
  display: flex;
  font-size: 12px;
  align-items: center;
  border: 3px solid green;
}
.BottomLeft {
  height: 24px;
  width: 451px;
  /* display: flex;
  align-items: center;
  flex-wrap: wrap;
  -ms-flex-wrap: nowrap;
  flex-grow: 1; */
  border: 3px solid blue;
}
</style>