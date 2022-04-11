// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = function() {
    prompt("Click ok to get a password with no parameters." , "Input 'NO' to set the restrictions of the password.");
        if (prompt == "NO"){ prompt("How long would you like the password to be?" , "Enter one of these amounts..'8' '16' '32' '64' '128'.")}
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*_=+<>,.?/",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

var i = 0;
while(i<1)
{
	$('#generate').html( $('#generate').html()+'<br>'+generatePassword() );
  i++;
};
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
