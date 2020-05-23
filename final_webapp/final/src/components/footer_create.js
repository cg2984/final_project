import React from "react";

function FooterCreate({loggedIn}){
	return (
		<div>
			<footer>
				{loggedIn && <button className = "buttonOpen__footer__dark"><a href = "/">Home</a></button>}
				{loggedIn && <button className = "buttonOpen__footer__light"><a href = "/createPost">Create Post</a></button>}
			</footer>
		</div>
	);
}

export default FooterCreate;