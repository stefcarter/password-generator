var generateBtn = document.querySelector("#generate");

// password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//  variables for the selections
var alphLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symArray = ['!', '@', '#', '$', '%', '^', '&', '*'];

// arrays
var allChar = alphLower.concat(alphUpper, numArray, symArray);
var charNoUpper = alphLower.concat(numArray, symArray);
var charNoLower = alphUpper.concat(numArray, symArray);
var charNoNum = alphLower.concat(alphUpper, symArray);
var charNoSym = alphLower.concat(alphUpper, numArray);
var charLowerNum = alphLower.concat(numArray)
var charLowerSym = alphLower.concat(symArray)
var charUpperNum = alphUpper.concat(numArray)
var charUpperSym = alphUpper.concat(symArray)
var charLowerUpper = alphLower.concat(alphUpper)

var newPass = []
var randPass = []
var currentPassLength = 0

function generatePassword() {

  // Resets password selections when button is clicked
  var newPass = []
  var randPass = []
  var currentPassLength = 0

  var passLen = parseInt(prompt("How long will your password be? (Choose a value 8 - 128)"));
  if (!(passLen <= 128 && passLen >= 8)) {
    alert("The the input for password length is not within requested length.");
    newPass = [];
    return;
  }

  function chooseArray(array) {
    for (i = 0; i < passLen - currentPassLength; i++) {
      var randAlpha = Math.floor(Math.random() * array.length);
      newPass.push(array[randAlpha]);
    } 
  } 
  
  var lower = prompt("Will your password have lower case letters? (Y/N)");
  if (lower.toLowerCase()==="y") {
    currentPassLength = currentPassLength + 1;
    var randLower = Math.floor(Math.random() * alphLower.length);
    newPass.push(alphLower[randLower]);
  } else if (lower.toLowerCase() != "y" && lower.toLowerCase() != "n") {
    alert("Incorrect value for lower case prompt.");
    return
  }

  var upper = prompt("Will your password have upper case letters? (Y/N)");
  if (upper.toLowerCase()==="y") {
    currentPassLength = currentPassLength + 1;
    var randUpper = Math.floor(Math.random() * alphLower.length);
    newPass.push(alphLower[randUpper].toUpperCase());
  } else if (upper.toLowerCase() != "y" && upper.toLowerCase() != "n") {
    alert("Incorrect value for upper case prompt.")
    return;
  }

  var numeric = prompt("Will your password have a number? (Y/N)");
  if (numeric.toLowerCase() === "y") {
    currentPassLength = currentPassLength + 1;
    var randNum = Math.floor(Math.random() * numArray.length);
    newPass.push(numArray[randNum]);
  } else if (numeric.toLowerCase() != "y" && numeric.toLowerCase() != "n") {
    alert("Incorrect value for number prompt.")
    return;
  }

  var specialChar = prompt("Will your password have a special character? (Y/N)");
  if (specialChar.toLowerCase() === "y") {
    currentPassLength = currentPassLength + 1;
    var randChar = Math.floor(Math.random() * symArray.length);
    newPass.push(symArray[randChar]);
  } else if (specialChar.toLowerCase() != "y" && specialChar.toLowerCase() != "n") {
    alert("Incorrect value for special character prompt.")
    return;
  }

  // answer prompts used in password
  if (lower.toLowerCase() === "y" && upper.toLowerCase() === "y" && numeric.toLowerCase() === "y" && specialChar.toLowerCase() === "y") {
    chooseArray(allChar);
  } else if (lower.toLowerCase() === "y" && upper.toLowerCase() === "n" && numeric.toLowerCase() === "y" && specialChar.toLowerCase() === "y") {
    chooseArray(charNoUpper);
  } else if (lower.toLowerCase() === "n" && upper.toLowerCase() === "y" && numeric.toLowerCase() === "y" && specialChar.toLowerCase() === "y") {
    chooseArray(charNoLower);
  } else if (lower.toLowerCase() === "y" && upper.toLowerCase() === "y" && numeric.toLowerCase() === "n" && specialChar.toLowerCase() === "y") {
    chooseArray(charNoNum);
  } else if (lower.toLowerCase() === "y" && upper.toLowerCase() === "y" && numeric.toLowerCase() === "y" && specialChar.toLowerCase() === "n") {
    chooseArray(charNoSym);
  } else if (lower.toLowerCase() === "y" && upper.toLowerCase() === "n" && numeric.toLowerCase() === "y" && specialChar.toLowerCase() === "n") {
    chooseArray(charLowerNum);
  } else if (lower.toLowerCase() === "y" && upper.toLowerCase() === "n" && numeric.toLowerCase() === "n" && specialChar.toLowerCase() === "y") {
    chooseArray(charLowerSym);
  } else if (lower.toLowerCase() === "n" && upper.toLowerCase() === "y" && numeric.toLowerCase() === "y" && specialChar.toLowerCase() === "n") {
    chooseArray(charUpperNum);
  } else if (lower.toLowerCase() === "n" && upper.toLowerCase() === "y" && numeric.toLowerCase() === "n" && specialChar.toLowerCase() === "y") {
    chooseArray(charUpperSym);
  } else if (lower.toLowerCase() === "y" && upper.toLowerCase() === "y" && numeric.toLowerCase() === "n" && specialChar.toLowerCase() === "n") {
    chooseArray(charLowerUpper);
  } else if (lower.toLowerCase() === 'n' && upper.toLowerCase() === 'n') {
    alert("You must choose upper or lower case letters.");
    newPass = [];
    return;
  } else {
    alert("Incorrect value entered");
    newPass = [];
    return;
  }
  
  for (i = newPass.length-1; i >= 0; i--) {
    var randIndex = newPass.splice(Math.floor(Math.random() * newPass.length), 1);
    randPass.push(randIndex[0]);
  }
  return randPass.join('');
}

generateBtn.addEventListener("click", writePassword);