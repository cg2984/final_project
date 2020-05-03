import React from "react";

function Footer({LogoutFunc, loggedIn}){
	return (
		<div>
			<nav>
				{loggedIn && <a href="/">Profile</a>}
				{loggedIn && <button className = "buttonOpen__red"><a onClick = {() => LogoutFunc()}>Log Out</a></button>}
			</nav>
		</div>
	);
}

export default Footer;