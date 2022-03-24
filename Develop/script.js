//onclick (button) user is presented with password criteria prompts
//select criteria to include in password
  //choose a length 8-128 characters
  //choose character types (lowercase, uppercase, numeric, special characters)
  //validate input (at least one character type must be selected)
//when all prompts are answered, then generate a password matching criteria
//when generated, password is displayed in alert or written to the page

// password criteria array
var passwordCriteria = ["LOWERCASE", "UPPERCASE", "NUMERIC", "SPECIAL"];
var userPickedCriteria = [];

// var passwordObj = {

// }

// define generateCriteria function
var generateCriteria = function(){  
  // for loop to cycle through passwordCriteria array
  for (var i = 0; i < passwordCriteria.length; i++) {
      var pickedCriteria = passwordCriteria[i]
      var promptCriteria = window.prompt("Would you like to include " + pickedCriteria + " characters? Enter 'YES' or 'NO'");
      let userInput = promptCriteria.toLowerCase();

      // if yes, store information for later
      switch (userInput) {
        case "yes":
          console.log(pickedCriteria);
          // send pickedCriteria into an array
          userPickedCriteria = (pickedCriteria + ", " + userPickedCriteria);
          break;
        case "no":
          userPickedCriteria = (pickedCriteria + ", " + 0);
          break;
        default:
          window.alert("Please choose a valid option.")
          // generateCriteria();
          break;
      }
    }
    // return userPickedCriteria;
  };  

// define generatePassword function
var generatePassword = function(){
  window.alert("Please follow the prompts to select your password criteria.");

  // ask user to input length of password
  let passwordLength = window.prompt("Please choose your password length (8-128 characters)");
  // validate password length input
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("You must enter a valid password length.")
    generatePassword();
  }
  else {
    console.log(passwordLength);
  }
  // store that information for later

  generateCriteria();

  // validate picked criteria to make sure user selected at least one item
  if (userPickedCriteria.length < 1) {
    window.alert("You must select at least one password criteria. Please try again.");
    generateCriteria();
  };

  // IF ARRAY contains "CRITERIA" then do this?
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


