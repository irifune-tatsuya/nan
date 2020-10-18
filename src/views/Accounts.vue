<template>
  <section>
    <Header></Header>
    <div class="accounts">
      <h1 class="title">accounts</h1>
      <div class="accounts__contents">
        <div class="accounts__contents__right">
          <a class="twitter-timeline" data-lang="ja" data-width="35vw" data-height="30vw" :data-theme="darkMode()" href="https://twitter.com/iczo32"></a>
        </div>
        <div class="accounts__contents__left">
          <a href="https://twitter.com/iczo32"><div class="accounts__contents__left__links twitter"><span class="fab fa-twitter"></span>twitter account</div></a>
          <a href="https://qiita.com/iczo32"><div class="accounts__contents__left__links qiita">Qiita account</div></a>
          <a href="https://github.com/irifune-tatsuya"><div class="accounts__contents__left__links github"><span class="fab fa-github"></span>GitHub account</div></a>
          <div class="accounts__contents__left__message">
            <div class="accounts__contents__left__message--text"><p>Please Follow me !!</p></div>
            <div class="accounts__contents__left__message--img"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'Accounts',
  components: {
    Header,
    Footer
  },
    data: function() {
    return {
      mode: "light"
    }
  },
  methods: {
    darkMode: function() {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return this.mode = "dark";
      } else {
        return this.mode = "light";
      }
    }
  }
}
</script>