import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4dJUJLMfmP_H0C7FD_Ydg1NImjfYaOdM",
  authDomain: "react-firebase-auth-de315.firebaseapp.com",
  projectId: "react-firebase-auth-de315",
  storageBucket: "react-firebase-auth-de315.appspot.com",
  messagingSenderId: "122303278219",
  appId: "1:122303278219:web:06494ac4c09f7c7f2bf88e",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };
