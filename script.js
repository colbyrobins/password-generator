// Assignment Code
var generateBtn = document.querySelector("#generate");

// character types
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numerics = "123456789"
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{}|~"

function generatePassword() {

  var passwordLength = window.prompt("Choose a password passwordLength between 8 to 128");

  // check that the password is between 8 and 128 character long.
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password lenght cannot be less than 8 or greater than 126. Try again.")
    return
  }
  
  // prompt for character types to include
  var characterToSelectFrom = ""
  var useLowercase = useLowercase = window.confirm("Include lowercase characters?");
  var useUppserCase = window.confirm("Include uppercase characters?");
  var useNumerics = window.confirm("Include nurmeric characters?");
  var useSpecialChars = window.confirm("Include special characters?");

  // check which character types to include in password.
  if (useLowercase) {
    characterToSelectFrom += lowercase  
  }
  
  if (useUppserCase) {
    characterToSelectFrom += uppercase
  }

  if (useNumerics) {
    characterToSelectFrom += numerics
  }

  if (useSpecialChars) {
    characterToSelectFrom += specialCharacters
  }

  // if characters to select from is empty then no character types were selected.
  if (characterToSelectFrom === "") {
    window.alert("You must select at least one character type.")
    return 
  }

  // Iterate x number of times based on the password lengh and select random character from 
  // the available characters to choose from to create a random password.
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * characterToSelectFrom.length);
    password += characterToSelectFrom[randomIndex];
  }
  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
