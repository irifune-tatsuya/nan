created() {
  const docRef = firestore.collection("posts").doc("h8b1M9e7Gh8bdUeRY5SS");
  docRef.get().then(function(doc) {
    if (doc.exists) {
      var postData = doc.data();
      console.log(postData);
    } else {
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}