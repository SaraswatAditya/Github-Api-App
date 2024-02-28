    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
    apiKey: "key_here",
    authDomain: "git.firebaseapp.com",
    projectId: "git",
    storageBucket: "git.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  //initialize firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export default app;
   
