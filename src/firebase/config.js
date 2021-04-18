import firebase from "firebase/app";
import "firebase/firebase-storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCO2QRBxBqQEuIqi6wKJZU1Resn10kMzG8",
  authDomain: "deadviz-firegram.firebaseapp.com",
  projectId: "deadviz-firegram",
  storageBucket: "deadviz-firegram.appspot.com",
  messagingSenderId: "474191622653",
  appId: "1:474191622653:web:221103a69c1807e10be994",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
