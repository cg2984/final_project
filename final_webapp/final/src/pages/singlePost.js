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
					<button className = "buttonOpen__red"><a href="/">Home</a></button>
			</nav>	
			<div className = "SinglePost">
				<h3>{postData.title}</h3>
				<hr/>
				<p>{postData.text}</p>
				<p className = "date">1.10.19</p>
			</div>
		</div>
	);
}

export default SinglePost;