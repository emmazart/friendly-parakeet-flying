//onclick (button) user is presented with password criteria prompts
//select criteria to include in password
  //choose a length 8-128 characters
  //choose character types (lowercase, uppercase, numeric, special characters)
  //validate input (at least one character type must be selected)
//when all prompts are answered, then generate a password matching criteria
//when generated, password is displayed in alert or written to the page

// password criteria array
var passwordCriteria = ["LOWERCASE", "UPPERCASE", "NUMERIC", "SPECIAL"];

// for loop cycling through array 
var generateCriteria = function(){  
  for (var i = 0; i < passwordCriteria.length; i++) {
      var pickedCriteria = passwordCriteria[i]
      var promptCriteria = window.prompt("Would you like to include " + pickedCriteria + " characters? Enter 'YES' or 'NO'");
  
      // if yes, store information for later
      switch (promptCriteria) {
        case "yes":
        case "YES":
          console.log(pickedCriteria);
          break;
        case "no":
        case "NO":
          break;
        default:
          window.alert("Please choose a valid option.")
          generateCriteria();
          break;
      }




      // if (promptCriteria === "yes" || promptCriteria === "YES") {
      //   console.log(pickedCriteria);
      // } else if (promptCriteria === "no" || promptCriteria === "NO") {
      //   //nothing happens
      // }
      // else {
      //   window.alert("Please choose a valid option.");
      //   generateCriteria();
      // }
  
      // //if any of the array values are true, move on
      // if (passwordCriteria[i] = true) {
      //   // send information onward
      // }
      // else {
      //   window.alert("You must select at least one character type. Please try again!");
      //   generateCriteria();
      // }
    }
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


