<template>
  <div class="bbs">
    <section>
      <Header></Header>
      <div class="bbs">
        <h1 class="title">BBS</h1>
        <div class="bbs__contents">
          <router-view></router-view>
          <router-view name="CommentList"></router-view>
        </div>
      </div>
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Bbs',
  components: {
    Header,
    Footer
  }
}
</script>