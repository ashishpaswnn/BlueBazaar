// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAOHeL7HGwtyYvZLW-515QybaoWTWWAbo4",
  authDomain: "ashu-turnament.firebaseapp.com",
  projectId: "ashu-turnament",
  storageBucket: "ashu-turnament.appspot.com",
  messagingSenderId: "826025363170",
  appId: "1:826025363170:android:201d1b8f32bd9e3eb3c0bb",
  databaseURL: "https://ashu-turnament-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
