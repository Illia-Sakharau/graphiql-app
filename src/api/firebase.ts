import { FirebaseError, initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { showToastMessage } from "../modules/forms/util/showToastMessage";
import { LoginType, RegistrationType } from "../types/forms";
import { authMessagesType } from "../types/localization";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const idTokenResult = await user.getIdTokenResult();
    const tokenExpirationTime = new Date(
      idTokenResult.expirationTime,
    ).getTime();
    const currentTime = Date.now();
    if (tokenExpirationTime < currentTime) {
      signOut(auth);
    }
  }
});

const logInWithEmailAndPassword = async (
  { email, password }: LoginType,
  dictionary: authMessagesType,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    showToastMessage(dictionary.success_login, "green");
  } catch (err) {
    showToastMessage(dictionary.failed_login, "red");
  }
};

const registerWithEmailAndPassword = async (
  { name, email, password }: Omit<RegistrationType, "confirmPassword">,
  dictionary: authMessagesType,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    showToastMessage(dictionary.success_registration, "green");
  } catch (error) {
    if (
      error instanceof FirebaseError &&
      error.code === "auth/email-already-in-use"
    ) {
      showToastMessage(dictionary.existing_user_error, "red");
    } else {
      showToastMessage(dictionary.other_error, "red");
    }
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
