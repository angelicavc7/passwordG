var generateBtn = document.querySelector("#generate"); 
 

//  function allRandom(){
//Possible capital letters that could be included in password
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  
 //Possible lower case letters that could be included in password  
  var beta = "abcdefghijklmnopqrstuvwxyz".split("");

//numbers that can be included in password
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//special characters that can be included in password
  var symbols = "!@#$%^&*";

//   let random = {
//     beta,
//     alpha,
//     numbers,
//     symbols
//   };
//  };
// const config = {
// alpha: randomAlpha,
// beta: randomBeta,
// number: randomNumbers,
// symbol: randomSymbols
//  }

 function passChar(){

  //password length with specified valid entries 
  
  const passLength = prompt("Choose the length of your password that is between 8 and 128 characters long!"); 
    if(passLength < 8 ){
     alert("length not valid, choose between 8-128 characters"); 
   }else if (passLength > 128){
   alert("Length is not valid, choose between 8-128 characters");
  }; 

  //promps for user to confirm and add to the password

const chosenAlpha = confirm("Do you want to have uppercase letters in your password?");

const chosenBeta = confirm("Do you want to have lowercase letters in your password?")
  
const chosenSymbols = confirm("Do you want to have symbols in your password?") 

const chosenNumbers = confirm("Do you want to have Numbers in your password?")


  let charArr = {
  passLength,
  chosenAlpha,
  chosenBeta,
  chosenNumbers,
  chosenSymbols
  };
  return charArr;

};

function generatePassword() {

  let charArr = passChar();
  let chosenChar = '';


if (charArr.chosenAlpha) { 
  chosenChar += alpha;
} else {
  alert("your password will not contain uppercase letters")
}
// console.log(chosenAlpha)
  
if (charArr.chosenBeta) { 
  chosenChar += beta;
} else {
  alert("your password will not contain lowercase letters")
}
// console.log(chosenBeta)


if (charArr.chosenSymbols) { 
  chosenChar += symbols;
} else {
  alert("your password will not contain symbols letters")
}
// console.log(chosenSymbol)

if (charArr.chosenNumbers) { 
  chosenChar += numbers;
} else {
  alert("your password will not contain numbers letters")
}
// console.log(chosenNumber)


let password = [''];
//Get all true statements to not get false in the password
//Get password length to be added to all elements that are true

   
   for(let i = 0; i < charArr.passLength; i += 1){

    password.push(chosenChar[Math.floor(Math.random() * chosenChar.length)]);
   }
  //creates password in order to joing all of the characteristics togther 
return password.join('');
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
