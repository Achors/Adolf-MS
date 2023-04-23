// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase,
    ref, 
    set, 
    child, 
    remove, 
    update, 
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import {
    getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3SDlFfiMZHpIKsT9Wdr6z94G04Pa_PD4",
  authDomain: "nyerere-ms.firebaseapp.com",
  projectId: "nyerere-ms",
  storageBucket: "nyerere-ms.appspot.com",
  messagingSenderId: "552953650378",
  appId: "1:552953650378:web:09b2ef19a6103608df2833",
  measurementId: "G-WQ3PQ8NLYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const analytics = getAnalytics(app);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const firstnameInput = document.getElementById("firstName");
const lastnameInput = document.getElementById("lastname");
const createEmailInput = document.getElementById("email-signup");
const ConfirmEmailInput = document.getElementById("email-confirm");
const signUpPasswordInput = document.getElementById("passwordt");
const confirmSignUpPasswordInput = document.getElementById("cfm-passwordt");
const createAcctButton = document.getElementById("crt-acc");


const main = document.getElementById("main");
const signup = document.getElementById("signup");

const signupButton = document.getElementById("create-acct-btn");
const returnButton = document.getElementById("rtn-acc");


var email,
password,
firstname,
lastname,
signupEmail,
signupPassword,
confirmSignupEmail,
confirmSignupPassword;

createAcctButton.addEventListener("click", function () {
    console.log("hello")
    var isVerified = true;

    firstname = firstnameInput.value;
    lastname = lastnameInput.value;
    signupEmail = createEmailInput.value;
    confirmSignupEmail = ConfirmEmailInput.value;
    if (signupEmail != confirmSignupEmail) {
        window.alert("Email does not match");
        isVerified = false;
    }

    signupPassword = signUpPasswordInput.value;
    confirmSignupPassword = confirmSignUpPasswordInput.value;
    if (signupPassword != confirmSignupPassword) {
        window.alert("Password does not match");
        isVerified = false;
    }

    if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword== null ||
    confirmSignupPassword == null
    ) {
        window.alert("Please fill out all required fields");
    }

    if (isVerified) {
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
            const user = userCredential.user;


            window.alert("Success! Account Created");
            window.location = "./create-task.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert("Error occured. Try again");
            window.alert(errorMessage);
        });
    }
});

submitButton.addEventListener("click", function(){
    email = emailInput.value;
    password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;

        window.alert("Success!, welcome Back");
        window.location = "./create-task.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Error occured. Try again");
        window.alert(errorMessage);
    });
});



signupButton.addEventListener("click", function (){
    main.style.display = "none";
    signup.style.display = "block";
})
returnButton.addEventListener("click", function (){
    signup.style.display = "none";
    main.style.display = "block";
    
});

