// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = prompt(" How long should the password be?");
  var lowercase = confirm("Does it has lowercase?");
  var uppercase = confirm("Does it has upercase?");
  var numeric = confirm("Does it has numeric values?");
  var specialCharacters = confirm("Does it has numeric special characters?");

  passLength = parseInt(passLength);

  if (passLength < 8 || passLength > 128) {
    alert("Invalid password");
    return "";
  }
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
  if (upperCaseString === true) {
    masterList = masterList + upperCaseString;
  }
  if (numericString === true) {
    masterList = masterList + numericString;
  }
  if (specialCharactersString === true) {
    masterList = masterList + specialCharactersString;
  }
  var passSet = "";
  for (var i = o; i < passLength; i++) {
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
  console.log("pass");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
