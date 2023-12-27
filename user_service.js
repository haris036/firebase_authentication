const firebase = require("firebase/app");
const {
  collection,
  addDoc,
  getFirestore
} = require('firebase/firestore');


// const { initializeApp, cert } = require('firebase-admin/app');
// const { getFirestore,  } = require('firebase-admin/firestore');

const { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,

 } = require("firebase/auth");
//  const serviceAccount = require('./test-4433e-e270947c0147.json');

 
// const apiKey = process.env.FIREBASE_API_KEY;
let app = firebase.initializeApp({
  apiKey: "AIzaSyD9rtfZX7VfbtFjpoSAl6CagmkY9EUnT6k",

  authDomain: "test-4433e.firebaseapp.com",

  databaseURL: "https://test-4433e-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "test-4433e",

  storageBucket: "test-4433e.appspot.com",

  messagingSenderId: "652825340272",

  appId: "1:652825340272:web:efb9daa44271528d53c7b5"
});

const auth = getAuth();


// const db = firestore.getFirestore(firebase);
//  initializeApp({
//   credential: applicationDefault(),
// });
// const db = getFirestore();
const db = getFirestore(app);

exports.addUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
 
exports.saveUser = async (_email) => {
  await addDoc(collection(db, 'products'), {email: _email});
}