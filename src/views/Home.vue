<template>
  <section>
    <Header></Header>
    <div class="home__contents">
      <div class="home__contents__left" v-html="title"></div>
      <div class="home__contents__right">
        <div class="home__contents__right--megane"><img src="../assets/img/megane.png" id="megane" usemap="#megane_map"></div>
        <map name="megane_map">
          <area shape="rect" :coords="coords1" @click="oops=!oops">
          <area shape="rect" :coords="coords2" @click="omg=!omg">
        </map>
        <img src="../assets/img/oops.png" class="home__contents__right--oops" v-if="oops">
        <img src="../assets/img/omg.png" class="home__contents__right--omg" v-if="omg"> 
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
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
