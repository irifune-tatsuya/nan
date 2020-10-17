<template>
  <section id="accounts">
    <LoadExternalJS :url="some_url"></LoadExternalJS>
    <h1 class="title">accounts</h1>
    <div class="accounts__contents">
      <a class="twitter-timeline" data-lang="ja" data-width="50vw" data-height="35vw" data-theme="dark" href="https://twitter.com/iczo32">Tweets by TwitterDev</a>
      <div class="accounts__contents__list">
        <a href="https://twitter.com/iczo32"><div class="accounts__contents__list__links twitter"><span class="fab fa-twitter"></span>twitter account</div></a>
        <a href="https://qiita.com/iczo32"><div class="accounts__contents__list__links qiita">Qiita account</div></a>
        <a href="https://github.com/irifune-tatsuya"><div class="accounts__contents__list__links github"><span class="fab fa-github"></span>GitHub account</div></a>
        <div class="accounts__contents__list__message">
          <div class="accounts__contents__list__message--text"><p>Please Follow me !!</p></div>
          <div class="accounts__contents__list__message--img"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LoadExternalJS from "@/components/LoadExternalJS.vue"

export default {
  name: 'Accounts',
  components: {
    LoadExternalJS
  },
  data(){
    return {
      some_url: 'https://platform.twitter.com/widgets.js'
    }
  }
}
</script>
