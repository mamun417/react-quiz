import { initializeApp } from "firebase/app";

const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-quiz-dev-1fbfe.firebaseapp.com",
    projectId: "react-quiz-dev-1fbfe",
    storageBucket: "react-quiz-dev-1fbfe.appspot.com",
    messagingSenderId: "650431586146",
    appId: "1:650431586146:web:e301b3d988b8975aa8563b",
});

export default app;
