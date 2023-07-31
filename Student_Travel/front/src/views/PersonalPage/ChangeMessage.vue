<template>
  <div class="MessageContainer">
    <div class="First_column">
      <p class="item">
        用户:{{ id }}<br />
        dsakohfdosa ihdosh dsxmzcZdsakohfdosa ihdosh dsxmzcZdsakohfdosa ihdosh
        dsxmzcZdsakohfdosa ihdosh dsxmzcZ
      </p>
      <p class="item"></p>
      <p class="item"></p>
    </div>
    <div class="Second_column">
      <p class="item"></p>
      <p class="item"></p>
      <p class="item"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.MessageContainer {
  width: 100%;
  height: 83vh;
  margin: 5px auto;
  border: 3px solid red;
}
.First_column {
  height: 40vh;
  width: 100%;
  border: 3px solid yellow;
}
.Second_column {
  height: 40vh;
  width: 100%;
  border: 3px solid blue;
}
.item {
  height: 38vh;
  width: 27vh;
  margin: 5px 10px 30px 20px;
  border: 3px solid green;
}
</style>