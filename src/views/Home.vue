<template>
  <section class="home">
    <div class="title__contents__left" v-html="title"></div>
    <div class="title__contents__right">
      <div class="title__contents__right--megane"><img src="../assets/img/megane.png" id="megane" usemap="#megane_map"></div>
      <map name="megane_map">
        <area shape="rect" :coords="coords1" @click="oops=!oops">
        <area shape="rect" :coords="coords2" @click="omg=!omg">
      </map>
      <img src="../assets/img/oops.png" class="title__contents__right--oops" v-if="oops">
      <img src="../assets/img/omg.png" class="title__contents__right--omg" v-if="omg"> 
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      dark: true,
      title: "not<br>a<br>number",
      coords1: '',
      coords2: '',
      oops: false,
      omg: false
    }
  },
  mounted: function() {
    this.$nextTick(function () {
      const img = document.getElementById("megane");
      let w = img.clientWidth;
      let h = img.clientHeight;
      let h_w = Math.round(w / 2);
      this.coords1 = `${h_w}, 0, ${w}, ${h}`;
      this.coords2 = `0,0,${h_w},${h}`;
    })
  }
}
</script>
