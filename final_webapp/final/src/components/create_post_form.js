import React from "react";
//remeber to add the image thing in here
function CreatePostForm({CreatePostFunc}){
	let date  = new Date
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getYear();
	let today = month + "." + day + "." + year
	return (
		<div>
			<form onSubmit={(e) => CreatePostFunc(e)}>
				<label htmlFor="title"><p>Title</p></label>
				<input type = "text" name = "Title" maxlength = "35"/>
				<label htmlFor="text"><p>Write Something!</p></label>
				<input type = "text" name = "Text"/>
				<button className = "buttonClosed"><p>Create Post</p></button>
			</form>
		</div>
	);
}

export default CreatePostForm;