// promp variable
var tesT = "I tried, tutor time!";

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
