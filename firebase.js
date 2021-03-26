let firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-8JCiQI7AXFchBGSrZbeOFn_R13j1TVg",
    authDomain: "nodejs-test-ca724.firebaseapp.com",
    databaseURL: "https://nodejs-test-ca724-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nodejs-test-ca724",
    storageBucket: "nodejs-test-ca724.appspot.com",
    messagingSenderId: "785653661536",
    appId: "1:785653661536:web:7cdd57815aa06523216805",
    measurementId: "G-SQZ38H2Z3K"
  };
  firebase.initializeApp(firebaseConfig);