import React, {useEffect,useState} from 'react';
//the star means import everything
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import CreateAccount from "./pages/create_account";
import Footer from "./components/footer.js"
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
    //Logged In
    if(user){
      setLoggedIn(true);
      setUserInfo(user);
      console.log("logged in");
    }
    //logged out
    else{
      setLoggedIn(false);
      console.log("logged out");
    }
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


  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          {!loggedIn ? <Redirect to="/login"/> : <Home userInfo={userInfo}/>}
        </Route>
        <Route exact path="/login">
          {!loggedIn ? (
            <Login LoginFunc={LoginFunc}/>
            ) : (
              <Redirect to="/"/>
            )}
        </Route>
        <Route exact path="/create-account">
           {!loggedIn ? (
           <CreateAccount CreateFunc={CreateFunc}/>
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
