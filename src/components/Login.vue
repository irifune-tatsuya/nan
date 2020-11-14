<template>
  <div>
    <p>掲示板を利用するためには、ログインが必要となります。</p>
    <div class="bbs__contents__form__content short-box flexbox">
      <input type="email" id="email" @click="clickInput" @blur="checkInput('email')" v-model="email">
      <transition name="input">
        <label for="email" v-if="inputLabel">Your Email</label>
        <span v-if="inputSpan">Your Email</span>
      </transition>
    </div>
    <div class="bbs__contents__form__content short-box">
      <input type="password" id="password" @click="clickText" @blur="checkText('password')" v-model="password">
      <transition name="input">
        <label for="password" v-if="textLabel">Password</label>
        <span v-if="textSpan">Password</span>
      </transition>
    </div>
    <div class="bbs__contents__form__btn">
      <button @click.prevent="loginUser">Login</button>
      <router-link to="/bbs/register"><button>Account Create</button></router-link>
    </div>
  </div>
</template>

<script>
import formTransition from "@/mixin/formTransition.js";
import firebaseApp from "@/firebase/firebase.js";
import router from '../router/index.js';

export default {
  mixins:[formTransition],
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    loginUser() {
      firebaseApp.auth().signInWithEmailAndPassword(
        this.email,
        this.password
      )
      .then(() => {
        router.push('/bbs/post');
      })
      .catch(error => {
        alert("ログインに失敗しました。");
        console.log(error.message);
      })
      this.email = "";
      this.password = "";
    }
  }
}
</script>