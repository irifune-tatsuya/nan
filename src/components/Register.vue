<template>
  <div>
    <p>アカウントをお持ちでない方は、こちらから新規作成ができます。</p>
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
      <button @click.prevent="createUser">Register</button>
      <router-link to="/bbs/login"><button>Go Login Page</button></router-link>
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
    createUser() {
      firebaseApp.auth().createUserWithEmailAndPassword(
        this.email,
        this.password
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      })
      this.email = "";
      this.password = "";
      router.push("/bbs/post");
    }
  }
}
</script>