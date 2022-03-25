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
var passwordArray = [];


// define function to read userPickedCriteria
var passwordContent = [];

var readPickedCriteria = function() {
  // if userPickedCriteria includes [criteria]
  let toMatch = String(userPickedCriteria);
  if (!toMatch.match("UPPERCASE")){
  } else {
    console.log("MATCHED! UPPERCASE")
    // define a variable associated with that criteria
    var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    // and add it to the password possibilities
    passwordContent = (passwordContent + upper);
    // and add 2 guaranteed characters to the passwordArray
    for (let i = 0; i < 2; i++) {
      var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var randomCharacter = getRandom(upperArray);
      passwordArray.push(randomCharacter);
    }  
  }
  if (!toMatch.match("LOWERCASE")){
  } else {
    console.log("MATCHED! LOWERCASE")
    let lower = ["abcdefghijklmnopqrstuvwxyz"];
    passwordContent = (passwordContent + lower);
    for (let i = 0; i < 2; i++) {
      var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var randomCharacter = getRandom(lowerArray);
      passwordArray.push(randomCharacter);
    }  
  }
  if (!toMatch.match("NUMERIC")){
  } else {
    console.log("MATCHED! NUMERIC")
    let num = ["0123456789"];
    passwordContent = (passwordContent + num);
    for (let i = 0; i < 2; i++) {
      var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var randomCharacter = getRandom(numArray);
      passwordArray.push(randomCharacter);
    }
  }
  if (!toMatch.match("SPECIAL")) {
  } else {
    console.log("MATCHED! SPECIAL")
    let spec = ["!@#$%^&*"];
    passwordContent = (passwordContent + spec);
    for (let i = 0; i < 2; i++) {
      var specArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
      var randomCharacter = getRandom(specArray);
      passwordArray.push(randomCharacter);
  }
  passwordContent = String(passwordContent);
};
};

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
          userPickedCriteria = (pickedCriteria + userPickedCriteria);
          break;
        case "no":
          // nothing happens
          break;
        default:
          window.alert("Please choose a valid option.")
          // rerun current prompt iteration
          // generateCriteria();
          break;
      }
    }
  };  


// define generatePassword function
var generatePassword = function(){
  window.alert("Please follow the prompts to select your password criteria.");

  // ask user to input length of password
  var passwordLength = window.prompt("Please choose your password length (8-128 characters)");
  // validate password length input
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("You must enter a valid password length.")
    generatePassword();
  }
  else {
    console.log(passwordLength);
    passwordLength = parseInt(passwordLength);
  }

  // define generateCriteria function to prompt through criteria array & receive user input
  generateCriteria();

  // validate picked criteria to make sure user selected at least one item
  if (userPickedCriteria.length < 1) {
    window.alert("You must select at least one password criteria. Please try again.");
    generateCriteria();
  }
  else {
    console.log(userPickedCriteria);
  };

  // IF ARRAY contains "CRITERIA" then do this
  readPickedCriteria();
  // display passwordContent to console
  console.log(passwordContent);

  // turn passwordContent into an array
  passwordContent = passwordContent.split("")
  // subtract guaranteed characters from passwordLength input
  passwordLength = (passwordLength - passwordArray.length);
  // loop through passwordContent as many times as our password character length
  for (let i = 0; i < passwordLength; i++) {
    var randomCharacter = getRandom(passwordContent);
    passwordArray.push(randomCharacter);
  }
  console.log(passwordArray);
  return passwordArray.join("");
};

function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement
}

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