import React, {useEffect,useState} from 'react';
import axios from 'axios';
import CreatePostForm from "../components/create_post_form.js"

function Home({userInfo}){
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

	// function CreatePostFunc(e){
	// 	e.preventDefault();
	// 	let text = e.currentTarget.Text.value;
	// 	let title = e.currentTarget.Title.value;
	// 	//const idFromText = title.replace(/\s+/g,"-").toLowerCase();
	// 	//let userId = userInformation.uid;
	// 	console.log("text",text);
	// 	console.log("title",title)
	// 	//stick an uplaod image function in here if your want to stick an image in there

	// 	axios.get(`http://localhost:4000/create?text=${text}&title=${title}&id=${idFromText}&userId=${userId}`)
	// 		 .then(function (response) {
	// 		    // handle success
	// 		    console.log("response",response);
	//   			})
	//   		  .catch(function (error) {
	// 		    // handle error
	// 		    console.log(error);
	// 		  })
	// 		  .finally(function () {
	// 		    // always executed
	// 		  });
	// }

	return (
		<div>
			<h1>Home</h1>
			{allPosts.map((post, i) => (
				<p key = {i}>{post.text}</p> 
			))}
			<a href = "/post">POSTS</a>
		</div>
	);
}

export default Home;