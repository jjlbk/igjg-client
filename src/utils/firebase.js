import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCBjT-8bS78mQw01vy3Vcr1wD8UqHik00",
  authDomain: "tmp-test-firebase.firebaseapp.com",
  databaseURL:
    "https://tmp-test-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tmp-test-firebase",
  storageBucket: "tmp-test-firebase.appspot.com",
  messagingSenderId: "98499052761",
  appId: "1:98499052761:web:6b2a7e0c15423399902ac8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export default db;
