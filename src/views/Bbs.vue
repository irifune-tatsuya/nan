<template>
  <div class="bbs">
    <section>
      <Header></Header>
      <div class="bbs">
        <h1 class="title">BBS</h1>
        <div class="bbs__contents">
          <form class="bbs__contents__form">
            <div class="bbs__contents__form__content short-box">
              <input type="text" name="name" id="name" @click="clickInput" @blur="checkInput()">
              <transition name="input">
                <label for="name" v-if="inputLabel">Your name</label>
                <span v-if="inputSpan">Your name</span>
              </transition>
            </div>
            <div class="bbs__contents__form__content">
              <textarea name="comments" id="comments" rows="1"  @click="clickText" @blur="checkText()"></textarea>
              <transition name="input">
                <label for="comments" v-if="textLabel">Comments</label>
                <span v-if="textSpan">Comments</span>
              </transition>
            </div>
            <div class="bbs__contents__form__btn">
              <input type="reset" value="Clear">
              <button type="submit">Send</button>
            </div>
          </form>
          <div class="bbs__contents__list">
            <div class="bbs__contents__list--hige"></div>
            <div class="bbs__contents__list__comment">
              <div class="bbs__contents__list__comment__main">
                <div class="bbs__contents__list__comment__main--name">いりふね</div>
                <div class="bbs__contents__list__comment__main--comments">本日はここまでとします‼️UdemyによるVue.js講座は、5%まで進めました。自己紹介ページの方は、明日は、掲示板部分のビューデザインを考えようと思います😍</div>
                <div class="bbs__contents__list__comment__main--createat">2020/10/20</div>
              </div>
            </div>
            <div class="bbs__contents__list__comment">
              <div class="bbs__contents__list__comment__main">
                <div class="bbs__contents__list__comment__main--name">いりふね</div>
                <div class="bbs__contents__list__comment__main--comments">今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)<br>今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)<br>今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)<br>今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)<br>今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)<br>今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)<br>今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)<br>今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません(；´Д｀)</div>
                <div class="bbs__contents__list__comment__main--createat">2020/10/20</div>
              </div>
            </div>
            <div class="bbs__contents__list__comment">
              <div class="bbs__contents__list__comment__main">
                <div class="bbs__contents__list__comment__main--name">入船</div>
                <div class="bbs__contents__list__comment__main--comments">今日は1日、Vue.jsの学習を進めていました。コンポーネントなどの考え方がまだ十分理解できていません</div>
                <div class="bbs__contents__list__comment__main--createat">2020/10/20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'Bbs',
  components: {
    Header,
    Footer
  },
    data: function() {
    return {
      inputSpan: true,
      inputLabel: false,
      textSpan: true,
      textLabel:false
    }
  },
  methods: {
    clickInput: function() {
      this.inputSpan = false;
      this.inputLabel = true;
    },
    checkInput: function() {
      if(document.getElementById('name').value === '') {
        this.inputSpan = true;
        this.inputLabel = false;
      } else {
        this.inputSpan = false;
        this.inputLabel = true;
      }
    },
    clickText: function() {
      this.textSpan = false;
      this.textLabel = true;
    },
    checkText: function() {
      if(document.getElementById('comments').value === '') {
        this.textSpan = true;
        this.textLabel = false;
      } else {
        this.textSpan = false;
        this.textLabel = true;
      }
    }
  }
}
</script>