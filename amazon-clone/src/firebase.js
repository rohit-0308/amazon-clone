import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5qByRRXJnIQ5rS4GnZNfTe10C1_DaNcE",
  authDomain: "clone-20830.firebaseapp.com",
  databaseURL: "https://clone-20830.firebaseio.com",
  projectId: "clone-20830",
  storageBucket: "clone-20830.appspot.com",
  messagingSenderId: "425644884583",
  appId: "1:425644884583:web:72d827795257faded94ac2",
  measurementId: "G-R57X4PFXM2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
