//------------------------------------------------------------FIREBASE STUFF
//getting the firebase module to use
const firebase = require("firebase/app");
//getting firebase to use
require("firebase/firestore");

//firebase config. all the info that i need to get stuff
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

//initializing firebase for the app
firebase.initializeApp(firebaseConfig);