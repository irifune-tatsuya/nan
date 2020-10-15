<template>
  <section id="profile">
    <h1 class="title">profile</h1>
    <div class="profile__contents">
      <ul class="profile__contents__list">
        <li class="profile__contents__list__comment profile__contents__list__comment--right">
          <div class="profile__contents__list__comment__white" v-if="profile1" @click="profile1 = !profile1">名古屋に住んでいます</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile1 = !profile1">もとは福岡に住んでいました</div>
          <div class="profile__contents__list__comment__gray" v-if="profile1"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
        <li class="profile__contents__list__comment">
          <div class="profile__contents__list__comment__white" v-if="profile2" @click="profile2 = !profile2">PHP/HTML/CSSとか</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile2 = !profile2">Ruby/Railsはうろ覚え</div>
          <div class="profile__contents__list__comment__gray" v-if="profile2"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
        <li class="profile__contents__list__comment profile__contents__list__comment--right">
          <div class="profile__contents__list__comment__white" v-if="profile3" @click="profile3 = !profile3">仮面ライダーちょい好き芸人</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile3 = !profile3">ここ２年見れてません泣</div>
          <div class="profile__contents__list__comment__gray" v-if="profile3"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
      </ul>
      <div class="profile__contents--mustacheman"></div>
      <ul class="profile__contents__list">
        <li class="profile__contents__list__comment">
          <div class="profile__contents__list__comment__white" v-if="profile4" @click="profile4 = !profile4">自社サイトの運用保守</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile4 = !profile4">開発職に憧れています!!</div>
          <div class="profile__contents__list__comment__gray" v-if="profile4"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
        <li class="profile__contents__list__comment profile__contents__list__comment--right">
          <div class="profile__contents__list__comment__white" v-if="profile5" @click="profile5 = !profile5">もくもく会したい!!</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile5 = !profile5">本当は無口で人見知り</div>
          <div class="profile__contents__list__comment__gray" v-if="profile5"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
        <li class="profile__contents__list__comment">
          <div class="profile__contents__list__comment__white" v-if="profile6" @click="profile6 = !profile6">Twitterで時々つぶやく</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile6 = !profile6">いいね&フォローお願い!!</div>
          <div class="profile__contents__list__comment__gray" v-if="profile6"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Profile',
  data: function() {
    return {
      profile1: true,
      profile2: true,
      profile3: true,
      profile4: true,
      profile5: true,
      profile6: true
    }
  }
}
</script>