import React from "react";

function Footer({CreatePostFunc, loggedIn}){
	let day = new Date();
  	let hour = day.getHours();
	return (
		<div>
			<footer>
				{loggedIn && <button className = "buttonOpen__footer"><a href = "/">Home</a></button>}
				{loggedIn && <button className = "buttonOpen__footer"><a href = "/createPost">Create Post</a></button>}
			</footer>
		</div>
	);
}

export default Footer;