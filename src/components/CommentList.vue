<template>
  <div class="bbs__contents__list">
    <div class="bbs__contents__list--hige"></div>
    <div class="bbs__contents__list__comment" v-for="post in posts" :key="post.comment">
      <div class="bbs__contents__list__comment__main">
        <div class="bbs__contents__list__comment__main--name">{{ post.nickname }}</div>
        <div class="bbs__contents__list__comment__main--comments">{{ post.comment }}</div>
        <div class="bbs__contents__list__comment__main--createat">{{ post.timeStamp.toDate() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/firebase/firebase.js';
import router from '@/router/index.js';

export default {
  data: function() {
    return {
      posts: []
    }
  },
  created() {
    const docRef = firebaseApp.firestore().collection("posts");
    docRef.orderBy("timeStamp","desc").limit(5).get()
    .then(response => {
      response.forEach((doc) => {
        this.posts.push(doc.data());
      });
    })
    .catch(() => {
      router.push('/bbs/login');
    });
  }
}
</script>