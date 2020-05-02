import React from "react";

function LoginForm({LoginFunc}){
	return (
		<div>
			<form onSubmit={(e) => LoginFunc(e)}>
				<label htmlFor="loginEmail"><p>Email</p></label>
				<input type = "email" name = "loginEmail"/>
				<label htmlFor="loginPassword"><p>Password</p></label>
				<input type = "password" name = "loginPassword"/>
				<button className = "buttonA"><p>Login</p></button>
			</form>
		</div>
	);
}

export default LoginForm;