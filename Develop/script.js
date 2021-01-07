// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*-_=+`~?\|";
var charset = "";
var pwlength = "";
var password = "";


//initialize pwlength then set while checking validity
function generatePassword () {
  while (pwlength < 8 || pwlength > 128 || isNaN (pwlength) ){
  pwlength = prompt ("Please pick a length between 8 and 128");
  }
  alert("The length of your password will be " + pwlength + " characters long!");
// send user confirmation on lower case and add it to pw character set
  var lowerConfirm = confirm("would you like to add lower case to your password?")
    if (lowerConfirm) {
      alert("no problem!");
      charset += lower;
    }
  //check if it updated with console
  console.log (charset);
//confirm uppercase
    var upperConfirm = confirm("would you like to add upper case to your password?")
    if (upperConfirm) {
      alert("Ok! I see you!");
      charset += upper;
    }

  console.log (charset);
//confirm numbers
    var numbersConfirm = confirm("how about a few numbers in there?")
    if (numbersConfirm) {
      alert("Dang! they aint ever gunna guess this one!");
      charset += numbers;
    }

  console.log (charset);

    var specialConfirm = confirm("Dash of special characters?")
    if (specialConfirm)  {
      alert("Oh you fancy huh?");
      charset += special;
    }

  console.log (charset);

    if (charset === '') {
      alert('might as well make your password "password"');
      alert("lets try again shall we?  this time select at least one set of characters to use please");
      window.parent.location = window.parent.location.href;
    } else {
      alert('abracadabra!');
    }

    for (var i = 0; i < pwlength; i++) {
      password += charset.charAt (Math.floor(Math.random()*charset.length))
    
    }

  console.log(password);
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
