<template>
  <section id="career">
    <Header></Header>
    <h1 class="title">carrer</h1>
    <div class="career__contents">
      <div v-for="data in $store.state.modalDatas" :key="data.id">
        <img src="../assets/img/trump.png" class="career__contents--trump" @click="data.value = true">
      </div>
    </div>
    <transition name="modal" v-for="data in $store.state.modalDatas" :key="data.id">
      <div class="modal__contents" v-if="data.value">
        <div class="modal__contents__bg" @click="data.value = false"></div>
        <div class="modal__contents__card">
          <img :src="data.img" class="modal__contents__card__img">
          <div class="modal__contents__card__row">
            <p class="modal__contents__card__row--title">{{ data.title }}</p>
            <p class="modal__contents__card__row--text" v-html="data.text"></p>
            <button class="modal__contents__card__row--btn" @click="data.value = false">close</button>
          </div>
        </div>
      </div>
    </transition>
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