import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyCFV8Ilr04HXl7kNU0SDhMIIX5teJBTeQM",
  authDomain: "react-blog-980ea.firebaseapp.com",
  databaseURL: "https://react-blog-980ea.firebaseio.com",
  projectId: "react-blog-980ea",
  storageBucket: "react-blog-980ea.appspot.com",
  messagingSenderId: "9690312276",
  appId: "1:9690312276:web:03a71bb41041186f29c7c1"
});

const db = firebaseApp.firestore();

export {db};