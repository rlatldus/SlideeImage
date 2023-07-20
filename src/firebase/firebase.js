//firebase.js
import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyARnhkgd-NGOg-PdumcqGGgtzZfDnK4PNU",
  authDomain: "artificial-intelligence-26e36.firebaseapp.com",
  projectId: "artificial-intelligence-26e36",
  storageBucket: "artificial-intelligence-26e36.appspot.com",
  messagingSenderId: "346198198792",
  appId: "1:346198198792:web:8b68d9e64266f17e5d5fbd",
  measurementId: "G-2XHPZVD4CH",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

export default firebase;