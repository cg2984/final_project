import React from "react";

function CreateAccountForm({CreateFunc}){
	return (
		<div>
			<form className = "signUpForm" onSubmit={(e) => CreateFunc(e)}>
				<label htmlFor="createEmail"><p>Email*</p></label>
				<input type = "email" name = "createEmail"/>
				<label htmlFor="createPassword"><p>Password*</p></label>
				<input type = "password" name = "createPassword"/>
				<button className = "buttonClosed"><p>sign up</p></button>
			</form>	
		</div>
	);
}

export default CreateAccountForm;