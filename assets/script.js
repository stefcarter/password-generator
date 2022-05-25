// promp variable
var generateBtn = document.querySelector("#generate");

// function for button
function myFunction(){
    document.getElementById("pass").innerHTML = "Select two of the following:";
    document.getElementById("section1").style.visibility="visible";
    document.getElementById("section1").className = 'show';
}

// prompt function
function myTest() {
    let person = prompt("Password is ", tesT);
}

var alphLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symArray = ['!', '@', '#', '$', '%', '^', '&', '*'];

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
    var newPass = []
    var randPass = []
    var currentPassLength = 0
}

var passLen = parseInt(prompt("How long will your password be? (Choose a value 8 - 128)"));
  // create if statement for any value not equal or between 8-128.
  if (!(passLen <= 128 && passLen >= 8)) {
    alert("The the input for password length is not within requested length.");
    newPass = [];
    // generatePassword();
    return;
};

// Create a function takes in an array as a parameter then pushes a random item from the array into the remaining length of the password
// Function will be used multiple times later to determine which combination of arrays linked to prompt answers is to be used when selecting a randoom password
function chooseArray(array) {
for (i = 0; i < passLen - currentPassLength; i++) {
      var randAlpha = Math.floor(Math.random() * array.length);
      newPass.push(array[randAlpha]);
    } 
} 