var accountState = 0;
const preObject = document.getElementById("displayImage");
const dbRefObject = firebase.database().ref().child('displayImage');
dbRefObject.on('value', snap => console.log(snap.val()));

//////////////////////

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //document.getElementById("loginForm").style.display = "none";
    //document.getElementById("logoutDiv").style.display = "initial";
    //document.getElementById("signUpDiv").style.display = "none";
    document.getElementById("logoutForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupDiv").style.display = "none";
  } else {
    document.getElementById("logoutForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupDiv").style.display = "block";
  }
});

function login() {	
	var email = document.getElementById("email_logIn").value;
	var password = document.getElementById("password_logIn").value;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
		window.alert("Welcome: " + email);
	}).catch(function(error) {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  window.alert("Error: " + errorCode + errorMessage );
	});
}

function signup() {
	var email = document.getElementById("email_signUp").value;
	var password = document.getElementById("password_signUp").value;
	document.getElementById("password_signUp").value = "";
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function() { 
		window.location = "/";
	}).catch(function(error) {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  window.alert("Error: " + errorCode + errorMessage);
	});
}

function logout() {
	firebase.auth().signOut();
}

function redirectToPost() {
	window.location = "/post.html"
}

function post() {

	/*var database = firebase.database();
	database.ref('users/' + userId).set({
		images: imageUrl
	});*/
	console.log("hi")
}