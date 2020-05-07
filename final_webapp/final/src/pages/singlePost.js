import React, {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePost(){
	console.log("post page");
	const { id } = useParams();
	console.log("id",id);
	const[postData, setPostData] = useState({});

	useEffect(() => {
			//the local host post 
			axios.get(`https://forest-final.herokuapp.com/post/${id}`)
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
			<nav className = "Header">
					<button className = "buttonOpen__create"><a href="/">Home</a></button>
			</nav>	
			<div className = "SinglePost">
				<h2>{postData.title}</h2>
				<p>{postData.text}</p>
			</div>
		</div>
	);
}

export default SinglePost;