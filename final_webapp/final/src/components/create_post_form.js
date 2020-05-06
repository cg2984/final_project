import React from "react";

function CreatePostForm(){
	return (
		<div>
			<form onSubmit={(e) => CreatePostFunc(e)}>
				<label htmlFor="title"><p>Title</p></label>
				<input type = "text" name = "Title"/>
				<label htmlFor="text"><p>Write Something!</p></label>
				<input type = "text" name = "Post"/>
				<button className = "buttonClosed"><p>Post</p></button>
			</form>
		</div>
	);
}

export default LoginForm;