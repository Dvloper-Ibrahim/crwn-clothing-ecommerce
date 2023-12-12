import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHaZLw68xTFs80a1W82dzl1anNSlb4LX8",
  authDomain: "crwn-clothing-hema.firebaseapp.com",
  projectId: "crwn-clothing-hema",
  storageBucket: "crwn-clothing-hema.appspot.com",
  messagingSenderId: "557677456534",
  appId: "1:557677456534:web:6ab0dd79791c7e5aa166b7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// Sign in with Google's popup method
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Sign in with Google's redirect method
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user: ", error);
    }
  }

  return userDocRef;
};
