<template>
  <div id="load-external-js">
  </div>
</template>

<script>
  export default {
    props: ['url'],
    created() {
      let tag_name = 'script'
      let recaptchaScript = document.createElement(tag_name)
      recaptchaScript.setAttribute('src', this.url)
      document.head.appendChild(recaptchaScript)
    }
  }
</script>