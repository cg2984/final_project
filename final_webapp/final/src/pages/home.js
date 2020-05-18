import React, {useEffect,useState} from 'react';
import axios from 'axios';
import CreatePostForm from "../components/create_post_form.js"

function Home({userInfo, loggedIn, LogoutFunc}){
	const[allPosts, setAllPosts] = useState([]);
	const myArray = [1,2,3,4,5];
	//getting all of the posts
	useEffect(() => {
			axios.get(`https://forest-final.herokuapp.com/`)
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
				<button className = "buttonOpen__red"><a onClick = {() => LogoutFunc()}>Log Out</a></button>
			</nav>
			<div className = "allPosts">
				{allPosts.map((post, i) => (
					<div className = "HomePost">
						<h3>{post.title}</h3>
						<hr/>
						<a href = {`/post/${post.id}`}>See Post</a>
						<p className = "date">1.10.19</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;