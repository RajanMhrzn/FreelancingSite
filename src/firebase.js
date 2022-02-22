import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC8P_gyBznDO5QcmIkHrfL-X4rXqaN_ThY",
  authDomain: "freelancer-28ec7.firebaseapp.com",
  projectId: "freelancer-28ec7",
  storageBucket: "freelancer-28ec7.appspot.com",
  messagingSenderId: "686080556035",
  appId: "1:686080556035:web:c443ce258fe96801fc6236",
  measurementId: "G-CNGJHCGWY2",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export const logout = () => {
  auth.signOut();
};

export { app, auth, db };
