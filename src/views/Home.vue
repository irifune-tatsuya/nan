<template>
  <div class="home">
    <div class="title__contents__left" v-html="title"></div>
    <div class="title__contents__right">
      <div class="title__contents__right--megane" id="megane" ><img src="../assets/img/megane.png" usemap="#megane_map" :load="load"></div>
      <map name="megane_map">
        <area shape="rect" coords="" @click="oops=!oops" v-if="true">
        <area shape="rect" coords="" @click="omg=!omg">
      </map>
      <img src="../assets/img/oops.png" class="title__contents__right--oops" v-if="oops">
      <img src="../assets/img/omg.png" class="title__contents__right--omg" v-if="omg"> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      dark: true,
      title: "not<br>a<br>number",
      url: "../assets/img/megane.png",
      oops: false,
      omg: false
    }
  },
  methods: {
    load: function() {
      console.log("完了");
    }
  }
}
</script>
