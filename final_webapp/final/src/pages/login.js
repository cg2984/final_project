import React from "react";
import LoginForm from "../components/login_form.js"

function Login({LoginFunc}){
	return (
		<div>
			<h1>Forest</h1>	
			<LoginForm LoginFunc={LoginFunc}/>
			<hr/>
			<p>new here?</p>
			<button className = "buttonOpen"><a href="/create-account">sign up</a></button>
		</div>
	);
}

export default Login;