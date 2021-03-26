 
//Possible lower case letters that could be included in password 
var beta = "abcdefghijklmnopqrstuvwxyz".split("");

//Possible capital letters that could be included in password
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

//numbers that can be included in password
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//special characters that can be included in password
var symbols= "!@#$%^&*". split("");

//all possible choices that could be picked from in the password

var passwordCharacters = symbols.concat(number, alpha, beta)

window.alert("Generate Password"); 

var passwordLength = confirm("type a password between 8 and 128 characters long")

var wantsToAddAll = confirm("Do you want to add all characteristics?")

var wantsToAddNum = confirm("Do you want to add numbers to your password?")

var wantsToAddBeta = confirm("Do you want to add lower case letters to your password?")

var wantsToAddAlpha = confirm("Do you want to add upper case letters to your password?")

var wantsToAddSymbols = confirm("Do you want to add symbols to your password?")

var generatePassword = true




var generateBtn = document.querySelector("#generate");

function generatePassword() {
    

    //var aNumber = Number(window.prompt("Type a number", ""));

    //var passwordLength //= Number(window.prompt("type a number", "")):

    if(passwordLength.toLowerCase() >= 8 && passwordLength < 128) {

        window.alert("length valid");

    }  else{(passwordLength.toLowerCase() <=8 && password > 128);
        window.alert("entry not valid")
    }

    //er chooses invalid number of characters
//alert the user of password length >=8 and >=128 characters
    
       
   if(wantsToAddAll.toLowerCase() === true){ 
    alert("create password", number, beta, alpha, symbols);
   
    var randomNumber = Math.floor(Math.random());
    var generatePassword = possibleChoices[randomNumber];
    var generatePassword = "";


    alert("this is your password, with all characteristics and specified length".generatePassword)
  //  } else(wantsToAddAll.toLowerCase === false)
    //    alert("Choose either, or any of the properties.")
    
   // if(wantsToAdd.toLowerCase() === true){
    //  console.log("", number, passwordLength)     

 //   if(wantsToAdd.toLowerCase() === true){
   //     console.log("", alpha, passwordLength) 

    //if(wantsToAdd.toLowerCase() === true){
      //  console.log("", beta, passwordLength)

    //if(wantsToAdd.toLowerCase() === true){
      //      console.log("", symbols, passwordLength)    

    //if(wantsToAdd.toLowerCase() === false){
      //  console.log("Invalid, password must contatain either or any number, uppper, or lowercase letter, and/or symbols.")
  //  }

    
    
//display confines for all different charater types (listed in readme)
//check if the user confirms on any of the boolean variables that were created, add that array to the possible characters array 
//if states
 //create a variable that wil hold the final password
//want to create a loop for as long as passwordlength
    //for each iteration, select a random character out of the possible characters array and add it the final password variable

    //return the final password from the generation password function


return "extra secret password";
}


function writePassword (){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

    generateBtn.addEventListener("click", writePassword);

