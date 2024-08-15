import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAZCx6XITy9jCAA7AeWuxAatPRnN_cNflg",
    authDomain: "testproject-28d84.firebaseapp.com",
    databaseURL: "https://testproject-28d84-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testproject-28d84",
    storageBucket: "testproject-28d84.appspot.com",
    messagingSenderId: "1049223873908",
    appId: "1:1049223873908:web:a236265caf806a2445d821",
    measurementId: "G-681BPE5MWF"
  };


export const app = initializeApp(firebaseConfig);