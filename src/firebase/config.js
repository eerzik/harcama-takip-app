import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBY_7A9MZeGJ_x68JQL3JGX_lVbzDQliWw",
    authDomain: "modern-react-app-af090.firebaseapp.com",
    projectId: "modern-react-app-af090",
    storageBucket: "modern-react-app-af090.appspot.com",
    messagingSenderId: "824161797109",
    appId: "1:824161797109:web:6bb764237bbcf1664996bc"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth }