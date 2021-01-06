// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*-_=+`~?\|";
var pwlength = '';
//initialize pwlength then set while checking validity
while (pwlength < 8 || pwlength > 128 || isNaN (pwlength) ){
  pwlength = prompt ("Please pick a length between 8 and 128");
}
alert("The length of your password will be " + pwlength + " characters long!");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
