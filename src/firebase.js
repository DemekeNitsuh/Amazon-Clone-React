
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCHHbjE_n7SEYF-6COOPDB9V_8zS4WvBLs",
    authDomain: "clone-2f003.firebaseapp.com",
    projectId: "clone-2f003",
    storageBucket: "clone-2f003.appspot.com",
    messagingSenderId: "661760259236",
    appId: "1:661760259236:web:abcf63b5887652ae03e231",
    measurementId: "G-QN5K3321EX"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };