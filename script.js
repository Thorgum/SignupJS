
function saveDetails() {
  //validate all inputs first
  var message = "";
  //if validation fails, function returns the
  // data that needs to be checked by the user

  message = message + validateEmail();
  message = message + validateUsername();
  message = message + validateTitle();
  message = message + validateName();
  message = message + validateGender();
  message = message + validateAddress();
  message = message + validateMobile();
  message = message + validateDob();
  message = message + validateCreditCard();
  message = message +  validatePassword();
  message = message + validateSecurityQ();


  if (message == "") {
    alert("Validation passed!");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else {
    if (message[0] == ",") {
      message = message.replace(/^,/, '');
    }
    message = message.trim();

    alert("Invalid " + message + " entered.");
  }
}

function validateEmail() {
  return "";
  //Peter Mawere
}

function validateUsername() {
  //after validation, if no issues, return ""
  //otherwise, return " username"
  //remember to include leading space!
  return "";
}

function validateTitle() {
  return "";
}
function validateName() {
  // Pi Was Here
  return "";
}

function validateGender() {
  var gender = document.getElementById('genders').value;
  if (gender == "enter"){
    return "gender";
  }
  else {
    return "";
  }
}

function validateAddress() {
  return "";
}

function validateMobile() {
  return "";
}
function validateDob() {
  //Joshu was here
  return "";
}

function validatePassword() {
  return "";
}

function validateCreditCard() {
  //Isaac is here :)
  return "";
}

// Andrew was here 😎
function validateSecurityQ() {
  //after validation, if no issues, return ""
  //otherwise, return ", security question"
  //remember to include leading space!

  return "";
}
