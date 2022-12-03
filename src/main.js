import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9AOQv6LEpF5O8HEuOyZbBdq3ke6EcEPM",
    authDomain: "hafozh-dfdbb.firebaseapp.com",
    projectId: "hafozh-dfdbb",
    storageBucket: "hafozh-dfdbb.appspot.com",
    messagingSenderId: "489628069659",
    appId: "1:489628069659:web:ad50dddc10db19b0b6adbe",
    measurementId: "G-RKFCFR85XW"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createApp(App).use(router).mount("#app");

export { app, auth };