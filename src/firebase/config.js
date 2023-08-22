import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBM7f12Aq-vX49RV7qwcyiArM4fvoaC3wA",
  authDomain: "miniblog-ad2b6.firebaseapp.com",
  projectId: "miniblog-ad2b6",
  storageBucket: "miniblog-ad2b6.appspot.com",
  messagingSenderId: "655658903541",
  appId: "1:655658903541:web:6d0740a68bb2b66d88a2bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize DB
const db = getFirestore(app)

export {db};