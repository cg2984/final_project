import React, {useEffect,useState} from 'react';
import axios from 'axios';
import CreatePostForm from "../components/create_post_form.js"

function Home({userInfo, loggedIn}){
	const[allPosts, setAllPosts] = useState([]);
	const myArray = [1,2,3,4,5];
	//getting all of the posts
	useEffect(() => {
			axios.get(`http://localhost:4000/`)
			  .then(function (response) {
			    // handle success
			    console.log(response);
			    setAllPosts(response.data);
			    console.log("response.data", response.data);

			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
			  .finally(function () {
			    // always executed
			  });
	}, []);

	console.log(myArray);
	console.log("all posts", allPosts);

	//function UploadImage()
	//const = storageref = firebase.sotrage().ref();
	//const fileReference = e.currentTarget

	return (
		<div>
			<nav className = "Header">
				<h2>Home</h2>
				<button className = "buttonOpen__create"><a href="/createPost">Create Post</a></button>
			</nav>
			{allPosts.map((post, i) => (
				<div className = "HomePost">
					<h2 key = {i}>{post.title}</h2>
					<p key = {i}>{post.text}</p> 
					<a href = {`/post/${post.id}`}>View Post</a>
				</div>
			))}
		</div>
	);
}

export default Home;