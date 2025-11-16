// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM_xJ6DW-2gdyGPyif47zJfgGAoWYI1Y0",
  authDomain: "quasartodolist-ad254.firebaseapp.com",
  projectId: "quasartodolist-ad254",
  storageBucket: "quasartodolist-ad254.firebasestorage.app",
  messagingSenderId: "956973568382",
  appId: "1:956973568382:web:9a58c0d323b7fac175a32f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;
