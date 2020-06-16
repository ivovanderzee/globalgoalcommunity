import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyDYdr9AyD-rdOqNCdWQzAL2ZhR7V4Fau3k",
  authDomain: "globalgoalscommunity.firebaseapp.com",
  databaseURL: "https://globalgoalscommunity.firebaseio.com",
  projectId: "globalgoalscommunity",
  storageBucket: "globalgoalscommunity.appspot.com",
  messagingSenderId: "272473238307",
  appId: "1:272473238307:web:e2ee14bf106efdee763a96"
})

export const db = firebase.firestore()


Vue.config.productionTip = false;
let app='';

firebase.auth().onAuthStateChanged(()=> {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});