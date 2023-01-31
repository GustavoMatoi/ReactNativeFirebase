import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBtwnA_ReAEi9AESvyc_zZu84qAZuOVmmg",
    authDomain: "crud-6a1d3.firebaseapp.com",
    databaseURL: "https://crud-6a1d3-default-rtdb.firebaseio.com",
    projectId: "crud-6a1d3",
    storageBucket: "crud-6a1d3.appspot.com",
    messagingSenderId: "952467489219",
    appId: "1:952467489219:web:fcae555dba6358347f3d76",
    measurementId: "G-54X8JD14ML"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, database };
