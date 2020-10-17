<template>
  <section id="profile">
    <Header></Header>
    <h1 class="title">profile</h1>
    <div class="profile__contents">
      <ul class="profile__contents__list">
        <li class="profile__contents__list__comment" v-for="(profile) in upperProfiles" :key="profile.id"> 
          <div class="profile__contents__list__comment__white" v-if="profile.value" @click="profile.value = !profile.value">{{ profile.text1 }}</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile.value = !profile.value">{{ profile.text2 }}</div>
          <div class="profile__contents__list__comment__gray" v-if="profile.value"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
      </ul>
      <div class="profile__contents--mustacheman"></div>
      <ul class="profile__contents__list">
        <li class="profile__contents__list__comment" v-for="profile in rowerProfiles" :key="profile.id"> 
          <div class="profile__contents__list__comment__white" v-if="profile.value" @click="profile.value = !profile.value">{{ profile.text1 }}</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile.value = !profile.value">{{ profile.text2 }}</div>
          <div class="profile__contents__list__comment__gray" v-if="profile.value"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </section>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'Profile',
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      upperProfiles: [
        {id: 1, value: "true", text1: "名古屋に住んでいます", text2: "もとは福岡に住んでいました"},
        {id: 2, value: "true", text1: "PHP/HTML/CSSとか", text2: "Ruby/Railsはうろ覚え"},
        {id: 3, value: "true", text1: "仮面ライダーちょい好き芸人", text2: "ここ２年見れてません泣"}
      ],
      rowerProfiles: [
        {id: 1, value: "true", text1: "自社サイトの運用保守", text2: "開発職に憧れています!!"},
        {id: 2, value: "true", text1: "もくもく会したい!!", text2: "本当は無口で人見知り"},
        {id: 3, value: "true", text1: "Twitterで時々つぶやく", text2: "いいね&フォローお願い!!"}
      ]
    }
  }
}
</script>