document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menu = document.querySelector(".menu");

  mobileMenu.addEventListener("click", function () {
    
    menu.classList.toggle("show");
  });
});

function processRegistration(event) {
  event.preventDefault();
  //alert('registration simulation');
  let username = document.getElementById("username");
  
  let password = document.getElementById("password");

  

  console.log(username.value);
''
  localStorage.setItem("RegisteredUsers", username.value + ":" + password.value + ";");
  alert("Registered successfully");

  // clean the verification 

  username.value = "";

  password.value = "";


}

function processLogin(event) {
  event.preventDefault();
  let usernameEntered = document.getElementById("username");
  let passwordEntered = document.getElementById("password");

  //alert("login simulation");
  // Retrieving data from localStorage
  const registeredUsers = localStorage.getItem("RegisteredUsers");
  //console.log(registeredUsers);
  let loginStatus = false;
  let message = "";
  if (registeredUsers != null) {
    let usernamePasswordPairs = registeredUsers.split(";");
    //console.log(usernamePasswordPairs[0]);
    for (let i = 0; i < usernamePasswordPairs.length; i++) {
      //console.log(usernamePasswordPairs[i]);
      if (usernamePasswordPairs[i] != " ") {
        let registeredUsername = usernamePasswordPairs[i].split(":")[0];
        let registeredPassword = usernamePasswordPairs[i].split(":")[1];
        console.log(registeredUsername);
        console.log(registeredPassword);
        if (
          usernameEntered.value == registeredUsername &&
          passwordEntered.value == registeredPassword
        ) {
          loginStatus = true;
          break;
        }
      }
    }
      usernameEntered.value = "";;

  passwordEntered.value = "";
    message = loginStatus
      ? "login success"
      : "login failed, invalid credentials";
  } else {
    message = "no one has registered!";
  }
  alert(message);

  //clean the text fields after verification

}
