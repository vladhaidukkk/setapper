import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'setapper-96945.firebaseapp.com',
  databaseURL: 'https://setapper-96945-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'setapper-96945',
  storageBucket: 'setapper-96945.appspot.com',
  messagingSenderId: '79367350954',
  appId: '1:79367350954:web:54b2860798130157753ed3',
};

const firebaseService = initializeApp(firebaseConfig);

export default firebaseService;
