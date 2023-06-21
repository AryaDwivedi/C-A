import firebase from "firebase";



const config = {
    apiKey: "AIzaSyA3WTXEjgaIOCJTFnvvleX_XW6iz_DqVT8",
    authDomain: "chat-app-f0523.firebaseapp.com",
    projectId: "chat-app-f0523",
    storageBucket: "chat-app-f0523.appspot.com",
    messagingSenderId: "791347538679",
    appId: "1:791347538679:web:b510d4c10cdcf069a201f2"
};
const app = firebase.initializeApp(config) //returns an instance of firebase application