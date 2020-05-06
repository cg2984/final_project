const express = require("express");
const router = express.Router();

//inclduing firebase
const firebase = require("firebase");

//initializing firestore database
const db = firebase.firestore();

//collections
const posts = db.collection("posts");

//submits the form
router.get("/submit", (req,res) => {
	const queryParams = req.query;
	//a regular expression or regex
	//removes the spaces from the new posts that you submit and replaces it with dashes
	console.log("queryParams",queryParams);
	posts
		//this makes the id in the database the title of the post
		.doc(idFromTitle)
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