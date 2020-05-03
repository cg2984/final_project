import React from "react";
import CreateAccountForm from "../components/create_account_form"

function CreateAccount({CreateFunc}){
	return (
		<div>
			<h1>Create Account</h1>	
			<p>Enter your information down below. Everything with a * is required</p>
			<CreateAccountForm CreateFunc={CreateFunc}/>
			<hr/>
			<button className = "buttonOpen__red"><a href="/login">back to login</a></button>
		</div>
	);
}

export default CreateAccount;