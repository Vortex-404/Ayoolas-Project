// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFmMEwnonld5xKQHrJKy4Hj2i8WtlpbH8",
  authDomain: "project-9d53b.firebaseapp.com",
  projectId: "project-9d53b",
  storageBucket: "project-9d53b.firebasestorage.app",
  messagingSenderId: "601936680387",
  appId: "1:601936680387:web:05864c5b721e709c281976",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs fields
  const email = document.getElementById("register_email").value; // Updated id
  const password = document.getElementById("register_password").value; // Updated id
  const firstname = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("User Created Successfully");
      window.location.href = "registration.html"; // Updated to navigate to the login section
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
});

