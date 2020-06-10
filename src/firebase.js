import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDYdr9AyD-rdOqNCdWQzAL2ZhR7V4Fau3k",
    authDomain: "globalgoalscommunity.firebaseapp.com",
    databaseURL: "https://globalgoalscommunity.firebaseio.com",
    projectId: "globalgoalscommunity",
    storageBucket: "globalgoalscommunity.appspot.com",
    messagingSenderId: "272473238307",
    appId: "1:272473238307:web:e2ee14bf106efdee763a96"
});

export const db = app.database();