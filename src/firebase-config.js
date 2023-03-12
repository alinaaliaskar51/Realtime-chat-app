import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA62EmpIdSOS0WtGJxYySlO4dT_TTg-WaQ",
  authDomain: "chat-app-4d710.firebaseapp.com",
  projectId: "chat-app-4d710",
  storageBucket: "chat-app-4d710.appspot.com",
  messagingSenderId: "615336564289",
  appId: "1:615336564289:web:d7c6706569f351350858c0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)