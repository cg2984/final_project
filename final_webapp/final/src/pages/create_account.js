import React from "react";
import CreateAccountForm from "../components/create_account_form"

function CreateAccount({CreateFunc}){
	return(
		<div  className = "create_account">
			<CreateAccountForm CreateFunc={CreateFunc}/>
			<button className = "buttonOpen"><a href="/login">back to login</a></button>
		</div>
	);
}

export default CreateAccount;