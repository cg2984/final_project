const express = require("express");
//require firebase
const firebase = require("firebase");
const router = express.Router();
const db = firebase.firestore();
const posts = db.collection("posts");

module.exports = router;

//post
router.get("/", (req, res) => res.send("Please Include a post ID"));

//post/post-id
router.get("/:id", (req,res) => {
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	const queryId = req.params.id; 
	posts
		.doc(queryId)
		.get()
		.then(function(doc){
			if(doc.exists){
				return res.send(doc.data());
			} else{
				return res.send("No Such Document");
			}
		})
		.catch(function (error) {
			return res.send("Catch function caught something");
		});
});
module.exports = router;


