import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDKyu1RTHE9S24L75gdocmZM2TEZ-aLwDE",
    authDomain: "mobilephone-f8be3.firebaseapp.com",
    projectId: "mobilephone-f8be3",
    storageBucket: "mobilephone-f8be3.appspot.com",
    messagingSenderId: "165537301023",
    appId: "1:165537301023:web:08c33efea5cd34524c0b2a",
    measurementId: "G-J42LW4FCCH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;