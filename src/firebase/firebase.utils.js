import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMdDUNFSAyRLwrDPlmhnIPiKatOdZrGZk",
  authDomain: "your-clothings.firebaseapp.com",
  projectId: "your-clothings",
  storageBucket: "your-clothings.appspot.com",
  messagingSenderId: "684963604775",
  appId: "1:684963604775:web:4f77fa46a4c1bd3dd52102",
  measurementId: "G-G3LQKMBX50",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
