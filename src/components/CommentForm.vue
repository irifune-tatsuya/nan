<template>
  <div class="bbs__contents__form">
    <div class="bbs__contents__form__content short-box">
      <input type="text" id="name" @click="clickInput" @blur="checkInput('name')" v-model="nickname">
      <transition name="input">
        <label for="name" v-if="inputLabel">Your name</label>
        <span v-if="inputSpan">Your name</span>
      </transition>
    </div>
    <div class="bbs__contents__form__content">
      <textarea id="comment" rows="1"  @click="clickText" @blur="checkText('comment')" v-model="comment"></textarea>
      <transition name="input">
        <label for="comment" v-if="textLabel">Comment</label>
        <span v-if="textSpan">Comment</span>
      </transition>
    </div>
    <div class="bbs__contents__form__btn">
      <input type="reset" value="Clear">
      <button @click.prevent="postComment()">Send</button>
      <button @click.prevent="logOutUser()">LogOut</button>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/firebase/firebase.js';
import formTransition from "@/mixin/formTransition.js";
import router from '@/router/index.js';

export default {
  mixins:[formTransition],
  data: function() {
    return {
      nickname: "",
      comment: ""
    }
  },
  methods: {
    postComment() {
      var now = new Date();
      firebaseApp.firestore().collection("posts").add({
        comment: this.comment.trim(),
        nickname: this.nickname.trim(),
        timeStamp: now
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });
      this.nickname = "";
      this.comment = "";
    },
    logOutUser() {
      firebaseApp.auth().signOut();
      alert('ログアウトしました。');
      router.push('/bbs/login');
    }
  }
}
</script>