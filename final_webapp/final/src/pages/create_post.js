import React from "react";
import CreatePostForm from "../components/create_post_form"

function CreatePost({CreatePostFunc}){
	return (
		<div>
			<nav className = "Header">
				<h2>New Post</h2>
				<button className = "buttonOpen__red"><a href="/login">Log out</a></button>
			</nav>	
			<p>Enter your information down below. Everything with a * is required</p>
			<CreatePostForm CreatePostFunc={CreatePostFunc}/>
		</div>
	);
}

export default CreatePost;