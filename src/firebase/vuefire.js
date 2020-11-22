import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebaseApp from './firebase.js';

Vue.use(firestorePlugin)

const db = firebaseApp.firestore();

export default db

db.settings({ timestampsInSnapshots: true })