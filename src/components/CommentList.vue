<template>
  <div class="bbs__contents__list">
    <div class="bbs__contents__list--hige"></div>
    <pre>{{posts}}</pre>
    <div class="bbs__contents__list__comment" v-for="post in posts" :key="post.id" :id="post.id">
      <div class="bbs__contents__list__comment__main">
        <div class="bbs__contents__list__comment__main--name">{{ post.nickname }}</div>
        <div class="bbs__contents__list__comment__main--comments">{{ post.comment }}</div>
        <div class="bbs__contents__list__comment__main__rower">
          <span class="bbs__contents__list__comment__main__rower--createat">{{ post.id }}</span>
          <div class="bbs__contents__list__comment__main__rower--createat">{{ post.timeStamp.toDate().toLocaleString() }}</div>
          <span class="fas fa-trash-alt bbs__contents__list__comment__main__rower--trash" @click="deleteComment(post.id)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebaseApp from '@/firebase/firebase.js';
import db from '@/firebase/vuefire';
// import router from '@/router/index.js';
export default {
  data() {
    return {
      posts: [],
    }
  },
  firestore: {
    posts: db.collection('posts'),
  },
  // created() {
  //   db.collection('posts').orderBy("timeStamp","desc").onSnapshot(response => {
  //     var i = 0;
  //     response.forEach(doc => {
  //       if(i != 0){
  //         this.posts.push(doc.data());
  //       }
  //       ++i;
  //     })
  //   });
  // },
  // created() {
  //   const docRef = db.collection("posts");
  //   docRef.orderBy("timeStamp","desc").get()
  //   .then(response => {
  //     var i = 0;
  //     response.forEach((doc) => {
  //       console.log(doc.data());
  //       if(i != 0) {
  //         this.posts.push(doc.data());
  //       }
  //       i++;
  //     });
  //   })
  //   .catch(() => {
  //     router.push('/bbs/login');
  //   });
  // },
  methods: {
    deleteComment(id) {
      if(!confirm('コメントを削除してもよろしいですか？')){
        return
      }
      db.collection("posts").doc(id).delete();
    }
  }
}
</script>