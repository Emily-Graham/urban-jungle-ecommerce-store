import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBae2XpVd4b0VVQDTacDE-i0W-IdNBLpc0",
  authDomain: "urban-jungle-c37b7.firebaseapp.com",
  projectId: "urban-jungle-c37b7",
  storageBucket: "urban-jungle-c37b7.appspot.com",
  messagingSenderId: "103423318532",
  appId: "1:103423318532:web:1797a139270d5073d23351"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore; 