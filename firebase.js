import * as firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGN29nypMSaA9a-tyrboVawRGKBYeuP8s",
    authDomain: "signal-clone-8c60b.firebaseapp.com",
    projectId: "signal-clone-8c60b",
    storageBucket: "signal-clone-8c60b.appspot.com",
    messagingSenderId: "517206940200",
    appId: "1:517206940200:web:8356f077e3f375de58b31d"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  } else {
      app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  export {db, auth};