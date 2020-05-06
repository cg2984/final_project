import React, {useEffect,useState} from 'react';
import axios from 'axios';

function Home({userInfo}){
	const[allPosts, setAllPosts] = useState({});

	//getting all of the posts
	useEffect(() => {
			axios.get(`http://localhost:4000/`)
			  .then(function (response) {
			    // handle success
			    console.log(response);
			    //this is where we take the data from the API and assign it to a the state WeatherData
			    setAllPosts(response.data);
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
			<h1>Home</h1>
			<div className = "posts">
			{allPosts.map((post,i) => (
			<p key ={i}>{post.text}</p>
			))}
			</div>
		</div>
	);
}

export default Home;