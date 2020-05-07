import React from "react";

function Footer({LogoutFunc, loggedIn}){
	return (
		<div>
			<footer>
				{loggedIn && <button className = "buttonOpen__red"><a onClick = {() => LogoutFunc()}>Log Out</a></button>}
			</footer>
		</div>
	);
}

export default Footer;