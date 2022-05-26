import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC2LPktB7ItgU-04NZWWp5vLrHUrGe4Jno",
    authDomain: "monitorias-b7050.firebaseapp.com",
    projectId: "monitorias-b7050",
    storageBucket: "monitorias-b7050.appspot.com",
    messagingSenderId: "863460961167",
    appId: "1:863460961167:web:f3d6448ba9746c549bb9fa"
};

const app  = initializeApp(firebaseConfig);
const auth  = getAuth(app)
const db = getFirestore(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
export { db, google, facebook, app, auth}