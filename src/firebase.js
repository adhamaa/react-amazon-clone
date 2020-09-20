import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsCrYLaz_7GqoBWIlicuINy0nCuIiupF8",
  authDomain: "clone-8c456.firebaseapp.com",
  databaseURL: "https://clone-8c456.firebaseio.com",
  projectId: "clone-8c456",
  storageBucket: "clone-8c456.appspot.com",
  messagingSenderId: "713827899123",
  appId: "1:713827899123:web:f48a56a1ed08961e100986",
  measurementId: "G-HV7EZMKXW2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
