import React from "react";

function Footer({CreatePostFunc, loggedIn}){
	return (
		<div>
			<footer>
				{loggedIn && <button className = "buttonOpen"><a href = "/createPost">Create Post</a></button>}
			</footer>
		</div>
	);
}

export default Footer;