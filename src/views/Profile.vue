<template>
  <section id="profile">
    <Header></Header>
    <h1 class="title">profile</h1>
    <div class="profile__contents">
      <ul class="profile__contents__list">
        <li class="profile__contents__list__comment" v-for="profile in $store.state.upperProfiles" :key="profile.id"> 
          <div class="profile__contents__list__comment__white" v-if="profile.value" @click="profile.value = !profile.value">{{ profile.text1 }}</div>
          <div class="profile__contents__list__comment__gray2" v-else @click="profile.value = !profile.value">{{ profile.text2 }}</div>
          <div class="profile__contents__list__comment__gray" v-if="profile.value"></div>
          <div class="profile__contents__list__comment__white2" v-else></div>
        </li>
      </ul>
      <div class="profile__contents--mustacheman"></div>
      <ul class="profile__contents__list">
        <li class="profile__contents__list__comment" v-for="profile in $store.state.rowerProfiles" :key="profile.id"> 
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
  }
}
</script>