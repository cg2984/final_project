const express = require('express')
const app = express()
let port = process.env.PORT || 4000;

//------------------------------------------------------------FIREBASE STUFF
//getting the firebase module to use
const firebase = require("firebase/app");
//getting firebase to use
require("firebase/firestore");

//firebase config. all the info that i need to get stuff
const firebaseConfig = {
    apiKey: "AIzaSyDMbPlBrNcbhPFtgZAOoWK1PapcG2Q_ADc",
    authDomain: "final-dynamic-a2bf2.firebaseapp.com",
    databaseURL: "https://final-dynamic-a2bf2.firebaseio.com",
    projectId: "final-dynamic-a2bf2",
    storageBucket: "final-dynamic-a2bf2.appspot.com",
    messagingSenderId: "639730610898",
    appId: "1:639730610898:web:0f55e88188d8d31f3c730b"
};

//initializing firebase for the app
firebase.initializeApp(firebaseConfig);


//import routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createPost.js");

//create base route 
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);


//function is express object 
//the two arguements are the port you have and a console log
app.listen(port, () => console.log(`Example app listening on port ${port}!`))