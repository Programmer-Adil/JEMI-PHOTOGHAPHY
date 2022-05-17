// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzOGdwxbyoVrqIUUdctH_W1xJWSaztX80",
    authDomain: "jemi-photography.firebaseapp.com",
    projectId: "jemi-photography",
    storageBucket: "jemi-photography.appspot.com",
    messagingSenderId: "229092982409",
    appId: "1:229092982409:web:de0fcc48cc154533931058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;