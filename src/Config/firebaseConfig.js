    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
    apiKey: "AIzaSyCpQ37oWlEB_LySOQJUgXpoyB8Tr_tWt0c",
    authDomain: "githubapp-803bb.firebaseapp.com",
    projectId: "githubapp-803bb",
    storageBucket: "githubapp-803bb.appspot.com",
    messagingSenderId: "1091058430420",
    appId: "1:1091058430420:web:c62d3ba332e27f8922a641",
    measurementId: "G-FJJNXVZ927"
  };

  //initialize firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export default app;
   