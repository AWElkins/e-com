import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANYLlnoukq_rNME7CK8i3ewfrf-cJnENg",
    authDomain: "e-com-3be8b.firebaseapp.com",
    databaseURL: "https://e-com-3be8b.firebaseio.com",
    projectId: "e-com-3be8b",
    storageBucket: "",
    messagingSenderId: "52813863452",
    appId: "1:52813863452:web:ad1d0da08ffc7892"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;