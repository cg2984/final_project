import React, {useEffect,useState} from 'react';
//the star means import everything
import * as firebase from "firebase/app";
import "firebase/auth";
//import firebase/storage
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import CreateAccount from "./pages/create_account";
import CreatePost from "./pages/create_post";
import Footer from "./components/footer.js"
import SinglePost from "./pages/singlePost";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const[loggedIn, setLoggedIn] = useState(false);
  const[loading, setLoading] = useState(true);
  const[userInfo,setUserInfo] = useState({});
  //this is stuff for images
  //const [storageRef,  setStorageRef] = useState(null);

  //firebase config. should remain at the top of the app
  const firebaseConfig = {
      apiKey: "AIzaSyDMbPlBrNcbhPFtgZAOoWK1PapcG2Q_ADc",
      authDomain: "final-dynamic-a2bf2.firebaseapp.com",
      databaseURL: "https://final-dynamic-a2bf2.firebaseio.com",
      projectId: "final-dynamic-a2bf2",
      storageBucket: "final-dynamic-a2bf2.appspot.com",
      messagingSenderId: "639730610898",
      appId: "1:639730610898:web:0f55e88188d8d31f3c730b"
  };

  //to make sure that firebase loads after page loads
  useEffect(() => {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    //using session storage to keep the auth, rather than cookies since it is easier to work with
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(e){
        console.log("AUTH ERROR", e);
      });

    //making sure firebase config is there before we initialize the firebase app
  },[firebaseConfig]);

//checking to see if the user is logged in
useEffect(() => {
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      //Logged In
      setLoggedIn(true);
      setUserInfo(user);
      console.log("logged in");
    }
    else{
      //not logged in
      setLoggedIn(false);
      console.log("logged out");
    }
    setLoading(false);
  })
},[]);

  function LoginFunc(e){
    e.preventDefault();
    console.log("e current target", e.currentTarget);
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(function(response){
        console.log("Login Response", response);
        setLoggedIn(true);
      })
      .catch(function(e){
        console.log("Login Error", e);
      });
    console.log("end of function");
  }

  function CreateFunc(e){
    //this prevents the form from sending a default form
    e.preventDefault();
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(function(response){
        console.log("Valid Account Created", response);
        setLoggedIn(true);
      })
      .catch(function(e){
        console.log("Create Account Error", e);
      });
  }

  function CreatePostFunc(e){
    e.preventDefault();
    let text = e.currentTarget.Text.value;
    let title = e.currentTarget.Title.value;
    const idFromTitle = title.replace(/\s+/g,"-").toLowerCase();
    let userId = userInfo.uid;
    console.log("text",text);
    console.log("title",title)
    //stick an uplaod image function in here if your want to stick an image in there

    axios.get(`http://localhost:4000/create?text=${text}&title=${title}&id=${idFromTitle}&userId=${userId}`)
       .then(function (response) {
          // handle success
          console.log("response",response);
          })
          .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }

  function LogoutFunc(){
      firebase
        .auth()
        .signOut()
        .then(function(){
          setLoggedIn(false);
        })
        
        .catch(function (error){
          console.log("logout error", error);
        });

  }
  if (loading) return null;
  return (
    <div className="App">
      <Router>     
          <Route exact path="/post/:id">
            {!loggedIn ? (
              <Redirect to="/login"/> 
              ) : (
              <SinglePost/>
            )}
          </Route>  
          
          <Route exact path="/create-account">
             {!loggedIn ? (
             <CreateAccount CreateFunc={CreateFunc}/>
              ) : (
                <Redirect to="/"/>
              )}
          </Route>
          <Route exact path="/createPost">
            {!loggedIn ? (
              <Redirect to="/login"/> 
              ) : (
              <CreatePost CreatePostFunc={CreatePostFunc}/>
            )}
          </Route>
          <Route exact path="/">
            {!loggedIn ? (
              <Redirect to="/login"/> 
              ) : (
              <Home userInfo={userInfo} loggedIn = {loggedIn} CreatePostFunc={CreatePostFunc}/>
              )}
          </Route>
          <Route exact path="/login">
            {!loggedIn ? (
              <Login LoginFunc={LoginFunc}/>
              ) : (
                <Redirect to="/"/>
              )}
          </Route>
        </Router>
      <Footer LogoutFunc={LogoutFunc} loggedIn = {loggedIn}/>
    </div>
  );
}

export default App;
