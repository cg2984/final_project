import React from "react";
import LoginForm from "../components/login_form.js"

function Login({LoginFunc}){
	return (
		<div>
			<h1>dreamer</h1>	
			<LoginForm LoginFunc={LoginFunc}/>
			<p>new here?</p>
			<button className = "buttonOpen"><a href="/create-account">sign up</a></button>
		</div>
	);
}

export default Login;