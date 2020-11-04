import Firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyC5B6OMN13cbV_kSxcMhiEg66TF8_XaiMc",
  authDomain: "not-a-number1109.firebaseapp.com",
  databaseURL: "https://not-a-number1109.firebaseio.com",
  projectId: "not-a-number1109",
  storageBucket: "not-a-number1109.appspot.com",
  messagingSenderId: "181151141083",
  appId: "1:181151141083:web:9cc448910054cf6ddc90fe",
  measurementId: "G-BWH555896F"
}

const firebaseApp = Firebase.initializeApp(config)
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
