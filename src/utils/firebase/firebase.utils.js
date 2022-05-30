import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcRdTnwvRtYZYptStH_kaZcJV3aHV1B4c",
  authDomain: "crwn-clothing-db-3fc6b.firebaseapp.com",
  projectId: "crwn-clothing-db-3fc6b",
  storageBucket: "crwn-clothing-db-3fc6b.appspot.com",
  messagingSenderId: "1062717763080",
  appId: "1:1062717763080:web:6375982e72009e44bd6bbd"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
