 
 const config = {
alpha: randomAlpha,
beta: randomBeta,
number: randomNumbers,
symbol: randomSymbols
 }
 
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
function randomNumbers(){
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return number[Math.floor(Math.random() * number.length)];
}
// console.log( randomNumber())

//special characters that can be included in password
function randomSymbols() {
  var symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(randomSymbol());
var TYPE_NUMBER = 0;

// chosenRandomArr = [
//   {randomAlpha}, 
//   {randomBeta}, 
//   {randomSymbols}, 
//   {randomNumbers}
// ] 


// const allRandom = {
//   alpha: chosenAlpha,  
//   number: chosenNumber,
//   beta: chosenBeta,
//   symbol: chosenSymbol
//   }
var generateBtn = document.querySelector("#generate");
   
function generatePassword( passLength, chosenNumbers, chosenSymbols, chosenAlpha, chosenBeta) {

  const allChosen = {
    chosenAlpha: randomAlpha(),
    chosenBeta: randomBeta(),
    chosenNumbers: randomNumbers(),
    chosenSymbols: randomSymbols()
  }
  // console.log(allChosen)
  
let generatedPassword = "";

while (true) {
   var passLength = prompt("Choose the length of your password that is between 8 and 128 characters long!", TYPE_NUMBER); 
  if( passLength <= 128 && passLength >= 8){
     config.passLength = "passLength", passLength; break;
   }else{
   alert("Length is not valid, choose between 8-128 characters")
  }
}
// console.log("passLength", passLength);


var chosenAlpha = confirm("Do you want to have uppercase letters in your password?");

if (chosenAlpha == true) { alert("your password will contain uppercase letters!")
} else {
  alert("your password will not contain uppercase letters")
}
console.log(chosenAlpha)
  

var chosenBeta = confirm("Do you want to have lowercase letters in your password?")

if (chosenBeta == true) { alert("your password will contain lowercase letters!", randomBeta)
} else {
  alert("your password will not contain lowercase letters")
}
// console.log(chosenBeta)


var chosenSymbols = confirm("Do you want to have symbols in your password?")

if (chosenSymbols == true) { alert("your password will contain symbols letters!", randomSymbols)
} else {
  alert("your password will not contain symbols letters")
}
// console.log(chosenSymbol)


var chosenNumbers = confirm("Do you want to have Numbers in your password?",)

if (chosenNumbers == true) { alert("your password will contain numbers letters!",randomNumbers)
} else {
  alert("your password will not contain numbers letters")
}
// console.log(chosenNumber)



//Get all true statements to not get false in the password
//Get password length to be added to all elements that are true

let elements = chosenNumbers + chosenSymbols + chosenAlpha + chosenBeta;
// console.log( "elements", elements)

let elementsArr = [{chosenNumbers}, {chosenSymbols}, {chosenAlpha}, {chosenBeta}].filter
(
  item => Object.values(item)[0]
);
  // console.log("elementsArr", elementsArr)

   if(elementsArr === 0){
      return "";
   }
   
   for(let i = 0; i < passLength.length; i += elements){
      elementsArr.forEach(type => {
        const config = Object.keys(type)[0]
    generatedPassword += config[elementsArr]
      });
  
return ("generatedPassword", generatedPassword);
}
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
