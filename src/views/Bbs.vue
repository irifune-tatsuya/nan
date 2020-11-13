<template>
  <div class="bbs">
    <section>
      <Header></Header>
      <div class="bbs">
        <h1 class="title">BBS</h1>
        <div class="bbs__contents">
          <router-view></router-view>
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
        </div>
      </div>
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import firebaseApp from '@/firebase/firebase.js';

export default {
  name: 'Bbs',
  components: {
    Header,
    Footer
  },
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
    .catch(error => {
      console.log("Error getting document:", error);
    });
  }
}
</script>