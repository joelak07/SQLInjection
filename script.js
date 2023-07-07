// document.getElementById("loginform").addEventListener("submit", function(event) {
//   event.preventDefault(); 
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   console.log("Username: " + username);
//   console.log("Password: " + password);
//   document.getElementById("username").value = "";
//   document.getElementById("password").value = "";
// });

document.getElementById("loginform").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var loginResult = document.getElementById("loginResult");
  if (username === "joel" && password === "1234") {
    loginResult.innerHTML = "<h4 class='login-success'>Login successful</h4>";
  } else {
    loginResult.innerHTML = "<h4 class='login-failed'>Incorrect Username or Password</h4>";
  }
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
