import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import { showToastMessage } from "../util/showToastMessage";
import { AuthMessages } from "../util/authMessages";
import { store } from "../../../store/store";
import { setUser } from "../../../store/slices/userSlice";

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

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setUser({ isLogged: true }));
    console.log("Пользователь вошел в систему:", user);
  } else {
    store.dispatch(setUser({ isLogged: false }));
    console.log("Пользователь вышел из системы");
  }
})

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    showToastMessage(AuthMessages.successLoginMessage, 'green');

  } catch (err) {
    showToastMessage(AuthMessages.failedLoginMessage, 'red');
  }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    showToastMessage(AuthMessages.successRegistrationMessage, 'green');
  } catch (error) {
    if (error instanceof FirebaseError && error.code === 'auth/email-already-in-use') {
      showToastMessage(AuthMessages.existingUserError, 'red');
    } else {
      showToastMessage(AuthMessages.otherErrorMessage, 'red');
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
