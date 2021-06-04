import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCP2yKJ8AxFBE4FUPpDqdgZHzFPbED6PSA",
    authDomain: "netflix-5d0a3.firebaseapp.com",
    projectId: "netflix-5d0a3",
    storageBucket: "netflix-5d0a3.appspot.com",
    messagingSenderId: "535789645501",
    appId: "1:535789645501:web:2038f5fa169e725c7091d4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;