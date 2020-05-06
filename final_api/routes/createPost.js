const express = require("express");
const router = express.Router();

//inclduing firebase
const firebase = require("firebase");

//initializing firestore database
const db = firebase.firestore();

//collections
const posts = db.collection("posts");

//submits the form
router.get("/", (req,res) => {
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	const queryParams = req.query;
	console.log("queryParams",queryParams);
	posts
		//this makes the id in the database the title of the post
		.doc(queryParams.id)
		.set(queryParams)
		.then(function(doc){
			console.log("sent");
			res.send("Success!");
		})
		.catch(function(error){
			console.log("error", error);
			res.send(`Error Submitting: ${error.toString()}`);
		});
});

module.exports = router;