import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxZURAfyMF0gwP41E4Xh8T9YFE67-Ha20",
  authDomain: "ecommerce-react-26ebb.firebaseapp.com",
  projectId: "ecommerce-react-26ebb",
  storageBucket: "ecommerce-react-26ebb.appspot.com",
  messagingSenderId: "982276289158",
  appId: "1:982276289158:web:c2adbc44f04293b7719707"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };