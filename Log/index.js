var config = {
    apiKey: "AIzaSyDAi0tMeh8lc-UBghE-xyihVKsajBqyGuY",
    authDomain: "web-register-d41f7.firebaseapp.com",
    databaseURL: "https://web-register-d41f7.firebaseio.com",
    projectId: "web-register-d41f7",
    storageBucket: "web-register-d41f7.appspot.com",
    messagingSenderId: "907236395954"
  };
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("login_form").style.display = "none";
        document.getElementById("user_Account").style.display = "block";
    } else {
        document.getElementById("user_Account").style.display = "none";
    }
});

function signUp(){
    document.getElementById("login_form").style.display = "none";
    document.getElementById("createAccount_form").style.display = "block";
}

function createAccount(){
    var user_login = document.getElementById("email").value;
    var user_password = document.getElementById("n_password").value;

    firebase.auth().createUserWithEmailAndPassword(user_login, user_password).catch(function(error) {
        // Handle Errors here.
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });
}

function logIn(){
    document.getElementById("createAccount_form").style.display = "none";
    document.getElementById("login_form").style.display = "block";
}

function accessAccount(){
    var user_login = document.getElementById("login").value;
    var user_password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(user_login, user_password).catch(function(error) {
        // Handle Errors here.
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
        console.log("Blad rejestracji")
    });
}

function logOut(){
    firebase.auth().signOut();
    document.getElementById("user_Account").style.display = "none";
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login_form").style.display = "block";
}