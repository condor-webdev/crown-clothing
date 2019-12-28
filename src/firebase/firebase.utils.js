import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyBavcNFeds7pwG0VmnqupBjt5slNXcykNY",
    authDomain: "crown-db-95c43.firebaseapp.com",
    databaseURL: "https://crown-db-95c43.firebaseio.com",
    projectId: "crown-db-95c43",
    storageBucket: "crown-db-95c43.appspot.com",
    messagingSenderId: "900378813861",
    appId: "1:900378813861:web:1b576d338a1083d53eb44c",
    measurementId: "G-LTSZVXQBFE"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;