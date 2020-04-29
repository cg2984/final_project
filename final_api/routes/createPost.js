const express = require("express");
const router = express.Router();

//inclduing firebase
const firebase = require("firebase");

//initializing firestore database
const db = firebase.firestore();

//collections
const posts = db.collection("posts");

//making form
const form = `<form action='/create/post'> 
	<input type="text" name="title" placeholder="Title"/>
	<input type="text" name="author" placeholder="User"/>
	<input type="text" name="text" placeholder="Text"/>
	<button type="submit">Submit</button>
	</form>`

//displays the form
router.get("/", (req,res) => res.send(form));

//submits the form
router.get("/post.", (req,res) => {
	const queryParams = req.query;
	//a regular expression or regex
	//removes the spaces from the new posts that you submit and replaces it with dashes
	const idFromTitle = queryParams.title.replace(/\s+/g,
		"-").toLowerCase();

	blogposts
		//this makes the id in the database the title of the post
		.doc(idFromTitle)
		.set(queryParams)
		.then(function(doc){
			res.send("<h1> Submission Success</h1><p><a href='/create'>Create another Post</a></p><p><a href='/'>Home</a></p>");
		})
		.catch(function(error){
			console.log("error", error);
			res.send(`Error Submitting: ${error.toString()}`);
		});
});

module.exports = router;