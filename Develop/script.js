//onclick (button) user is presented with password criteria prompts
//select criteria to include in password
  //choose a length 8-128 characters
  //choose character types (lowercase, uppercase, numeric, special characters)
  //validate input (at least one character type must be selected)
//when all prompts are answered, then generate a password matching criteria
//when generated, password is displayed in alert or written to the page

// password criteria array
var passwordCriteria = ["LOWERCASE", "UPPERCASE", "NUMERIC", "SPECIAL"];

// define generatePassword function
var generatePassword = function(){
  window.alert("Please follow the prompts to select your password criteria.");

// ask user to input length of password
  let passwordLength = window.prompt("Please choose your password length (8-128 characters)");
  console.log(passwordLength);
// store that information for later

// for loop cycling through array 
  for (var i = 0; i < passwordCriteria.length; i++) {
    var pickedCriteria = passwordCriteria[i]
    var promptCriteria = window.prompt("Would you like to include " + pickedCriteria + " characters? Enter 'YES' or 'NO'");

    // if yes, store information for later
    if (promptCriteria === "yes" || promptCriteria === "YES") {
      console.log(pickedCriteria);
    }
    // if no, nothing happens
    else {}
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


