import React, {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function Post(){
	const[postData, setPostData] = useState({});
	//console.log("id",id);

	useEffect(() => {
			//the local host post 
			axios.get(`http://localhost:4000/post/new-post`)
			//when this is in production we are going to use the heroku thing
			  .then(function (response) {
			    // handle success
			    console.log(response);
			    setPostData(response.data);
			   // console.log("id",id);
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
			  .finally(function () {
			    // always executed
			  });
	}, []);

	return (
		<div>
			<p>{postData.text}</p>
		</div>
	);
}

export default Post;