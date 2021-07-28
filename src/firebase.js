import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2daEGnQozl3HE-zQ-YiVoYMqb0QN6Uos",
    authDomain: "disneyplus-clone-1809c.firebaseapp.com",
    projectId: "disneyplus-clone-1809c",
    storageBucket: "disneyplus-clone-1809c.appspot.com",
    messagingSenderId: "356342186088",
    appId: "1:356342186088:web:4fbe1000c9ac35730ffbdd",
    measurementId: "G-1W0Z7V3J6F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;