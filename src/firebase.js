import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGRqTBu35g9q_CEI0Tk6X0oEoYJ4si4h8",
  authDomain: "facebook-messenger-clone-5f272.firebaseapp.com",
  projectId: "facebook-messenger-clone-5f272",
  storageBucket: "facebook-messenger-clone-5f272.appspot.com",
  messagingSenderId: "131264419951",
  appId: "1:131264419951:web:7fb243594125af8b22559a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
