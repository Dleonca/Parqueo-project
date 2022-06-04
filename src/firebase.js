import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD5_3WjVTp80dxzIcYGkuU5KBKOCr6jxo0",
  authDomain: "parqueo-e2f37.firebaseapp.com",
  projectId: "parqueo-e2f37",
  storageBucket: "parqueo-e2f37.appspot.com",
  messagingSenderId: "116238529998",
  appId: "1:116238529998:web:222a50eeaa914f7863679f",
  measurementId: "G-WTXV68T540"
};

// Initialize Firebase
app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
export{db, auth};