// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*-_=+`~?\|";



//initialize pwlength then set while checking validity
function generatePassword () {
  var pwlength = "";
  var password = "";
  var charset = "";

  while (pwlength < 8 || pwlength > 128 || isNaN (pwlength) ){
  pwlength = prompt ("Please pick a length between 8 and 128");
  }
  alert("The length of your password will be " + pwlength + " characters long!");
// send user confirmation on lower case and add it to pw character set
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

    for (var i = 0; i < pwlength; i++) {
      password += charset.charAt (Math.floor(Math.random()*charset.length))
    
    }
  return password;
  }; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
