import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCR7lZiTP146Q9sTJKWvViLoW4ii5Pz2j4",
  authDomain: "your-clothing-ec8c1.firebaseapp.com",
  projectId: "your-clothing-ec8c1",
  storageBucket: "your-clothing-ec8c1.appspot.com",
  messagingSenderId: "197232914704",
  appId: "1:197232914704:web:672362f6e732906695b595",
  measurementId: "G-TKFQF45EL4"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snaShot = await userRef.get();

  if (!snaShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
