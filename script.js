// variables for buttons and sets for password parameters
var generateBtn = document.querySelector("#generate");
var generateReset = document.querySelector("#reset");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*-_=+`~?\|";



// Password generator start
function generatePassword () {
  var pwlength = "";
  var password = "";
  var charset = "";
// while loop to check pw length is within 8-128 also that it is a number
  while (pwlength < 8 || pwlength > 128 || isNaN (pwlength) ){
  pwlength = prompt ("Please pick a length between 8 and 128");
  }
  alert("The length of your password will be " + pwlength + " characters long!");
// confirm lower case
  var lowerConfirm = confirm("would you like to add lower case to your password?")
    if (lowerConfirm) {
      charset += lower;
    }
//confirm uppercase
    var upperConfirm = confirm("would you like to add upper case to your password?")
    if (upperConfirm) {
      charset += upper;
    }
//confirm numbers
    var numbersConfirm = confirm("how about a few numbers in there?")
    if (numbersConfirm) {
      charset += numbers;
    }
//confirm special characters
    var specialConfirm = confirm("Dash of special characters?")
    if (specialConfirm)  {
      charset += special;
    }
//check to make sure the pw has parameters for creation
    if (charset === '') {
      alert('might as well make your password "password"');
      alert("lets try again shall we?  this time select at least one set of characters to use please");
    } else {
      alert('abracadabra!');
    }
//generates random password from users parameters
    for (var i = 0; i < pwlength; i++) {
      password += charset.charAt (Math.floor(Math.random()*charset.length))
    
    }
  return password;
  }; 

// runs program and updates the return to print it to the window
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Event listeners for buttons
generateBtn.addEventListener("click", writePassword);
generateReset.addEventListener("click", function() {
  window.parent.location.href=window.parent.location.href;
});
