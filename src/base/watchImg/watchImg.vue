<template>
<div id="watchImg">
  <div class="real" @click="headClick">
    <img :src="src" alt="">
  </div>
  <div class="float" v-if="showfloat" @click="showfloat = false">
    <img :src="src" alt="">
  </div>
</div>
</template>
<script src="./watchImg.js"></script>
<style>
#watchImg .real{
  cursor: pointer;
}
#watchImg .float{
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
#watchImg .float img{
  max-width: 100%;
  max-height: 100%;
}
</style>