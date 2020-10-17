<template>
  <footer>
    <div class="footer__text"><p>created by いりふね</p></div>
    <div class="footer__share__btn">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" class="twitter-share-button" data-show-count="false">Tweet</a>
    </div>
    <LoadExternalJS :url="TwitterURL"></LoadExternalJS>
  </footer>
</template>
<script>
import LoadExternalJS from "@/components/LoadExternalJS.vue"

export default {
  components: {
    LoadExternalJS
  },
  data(){
    return {
      TwitterURL: 'https://platform.twitter.com/widgets.js'
    }
  }
}
</script>