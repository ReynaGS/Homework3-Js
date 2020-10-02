var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = prompt(" How long should the password be?");

  passLength = parseInt(passLength);

  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return "";
  }
  var lowercase = confirm("Does it has lowercase?");
  var uppercase = confirm("Does it has upercase?");
  var numeric = confirm("Does it has numeric values?");
  var specialCharacters = confirm("Does it has numeric special characters?");

  if (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    specialCharacters === false
  ) {
    alert(
      "Please select at least one lower case, uppercase, numeric or special character!"
    );
    return "";
  }
  var numericString = "0123456789";
  var lowerCaseString = "abcdefghijklmnopqrstuvwxz";
  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var specialCharactersString = "!#$%& '()*+,-./:;<=>?@[]^_`{|}~ " + '"';
  var masterList = "";

  if (lowercase === true) {
    masterList = masterList + lowerCaseString;
  }
  if (uppercase === true) {
    masterList = masterList + upperCaseString;
  }
  if (numeric === true) {
    masterList = masterList + numericString;
  }
  if (specialCharacters === true) {
    masterList = masterList + specialCharactersString;
  }
  var passSet = "";

  for (var i = 0; i < passLength; i++) {
    var masterQuantity = masterList.length;
    var index = Math.floor(Math.random() * masterQuantity);

    passSet = passSet + masterList[index];
  }
  return passSet;
}
//Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
