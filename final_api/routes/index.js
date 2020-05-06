const express = require("express");

//require firebase
const firebase = require("firebase")

const router = express.Router();

//initializing firestore database
const db = firebase.firestore();

//collection
const posts = db.collection("posts");

//the function recieves two arguements, the path and the arrow function
//sending the array that we get from firestore to the server and displaying it on the browser in the root path
router.get("/", (req,res) => {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//array to put the posts in. keep the scope in the function
	let postsArray = [];
	posts.get()
	//this is a promise
	.then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
			//push document into array each time the query loops over existing articles
			//this is done w/ the forEach function
			postsArray.push(doc.data());
		});
		return res.send(postsArray);
	})
	.catch(function (error) {
		console.log("Error:", error)
		return res.send(error);
	});
});
module.exports = router;