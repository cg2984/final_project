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

//we need to change the port to be a variable so that heroku can set it for us
//if there is a port val then do that or (if that isnt there) use port 4000
let port = process.env.PORT || 4000;

//function is express object 
//the two arguements are the port you have and a console log
app.listen(port, () => console.log(`Example app listening on port ${port}!`))