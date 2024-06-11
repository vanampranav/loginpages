// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBpprOVLLQ9gB8--yFYuj5-ZK5k7frGbU",
  authDomain: "th-code-58d64.firebaseapp.com",
  projectId: "th-code-58d64",
  storageBucket: "th-code-58d64.appspot.com",
  messagingSenderId: "519269868065",
  appId: "1:519269868065:web:8ccc5fc8bc4d80aa343960",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result); // Log the result to verify
      return result.user;
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      throw error;
    }
  };

export { auth, signInWithGoogle };
