 //Possible lower case letters that could be included in password 
function randomBeta(){
  var beta = "abcdefghijklmnopqrstuvwxyz".split("");
  return beta[Math.floor(Math.random() * beta.length)];
}
// console.log(randomBeta())

//Possible capital letters that could be included in password
function randomAlpha(){
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  return alpha[Math.floor(Math.random() * alpha.length)];
}
// console.log(randomAlpha())

//numbers that can be included in password
function randomNumber(){
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return number[Math.floor(Math.random() * number.length)];
}
// console.log( randomNumber())

//special characters that can be included in password
function randomSymbol() {
  var symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(randomSymbol());
var TYPE_NUMBER = 0;

chosenRandomArr = []

//  password.passwordText = generatePassword( 
//   length,
//   choseNumber,
//   chosenSymbol, 
//   chosenAlpha, 
//   chosenBeta
//   );
   
var generateBtn = document.querySelector("#generate");

function generatePassword( length, number, symbol, alpha, beta) {
  
  const allRandom = {
    alpha: randomAlpha,
    beta: randomBeta,
    number: randomNumber,
    symbol: randomSymbol
  }
 const config ={
passLength: 8,
alpha: chosenAlpha,  
number: chosenNumber,
beta: chosenBeta,
symbol: chosenSymbol
 }



while (true) {
   var passLength = prompt("Choose the length of your password that is between 8 and 128 characters long!", TYPE_NUMBER); 
  if( passLength = 128 && passLength >= 8){
     allRandom.passLength = passLength; break;
   }else{
   alert("Length is not valid, choose between 8-128 characters")
  }
}
console.log("passLength", passLength);


var chosenAlpha = confirm("Do you want to have uppercase letters in your password?");

if (chosenAlpha == true) { alert("your password will contain uppercase letters!")
} else {
  alert("your password will not contain uppercase letters")
}
// console.log(chosenAlpha)
  

var chosenBeta = confirm("Do you want to have lowercase letters in your password?")

if (chosenBeta == true) { alert("your password will contain lowercase letters!")
} else {
  alert("your password will not contain lowercase letters")
}
// console.log(chosenBeta)


var chosenSymbol = confirm("Do you want to have symbols in your password?")

if (chosenSymbol == true) { alert("your password will contain symbols letters!")
} else {
  alert("your password will not contain symbols letters")
}
// console.log(chosenSymbol)


var chosenNumber = confirm("Do you want to have Numbers in your password?",)

if (chosenNumber == true) { alert("your password will contain numbers letters!",)
} else {
  alert("your password will not contain numbers letters")
}
// console.log(chosenNumber)

let generatedPassword = "";

//Get all true statements to not get false in the password
//Get password length to be added to all elements that are true

let elements = chosenNumber + chosenSymbol + chosenAlpha + chosenBeta;
console.log( "elements", elements)

let elementsArr = [{chosenNumber}, {chosenSymbol}, {chosenAlpha}, {chosenBeta}].filter
(
  item => Object.values(item)[0]
);
  console.log("elementsArr", elementsArr)

   if(elementsArr === 0){
      return "";
   }

   for(let i = 0; i < passLength.length; i += elements){
     elementsArr.forEach(types =>{
       const allRandom = Object.keys(type)[0]
       console.log("allRandom", allRandom)

       generatedPassword += allRandom[elementsArr]();
     })
   }
  
    
  
return "extra secret password";
}


function writePassword (){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

    generateBtn.addEventListener("click", writePassword);
alert("this is your password, with all characteristics and specified length".generatePassword)
