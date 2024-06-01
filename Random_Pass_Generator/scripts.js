 const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const lowerSet = "abcdefghijklmnopqrstuvwxyz"
 const numberSet = "0123456789"
 const symbolSet = "!@#$%^&*()+,-./:;<=>?"


 // Selectors

 const totalChar = document.getElementById("total-char")
 const passBox = document.getElementById("pass-box");
 const upperInput = document.getElementById("upper-case");
 const lowerInput = document.getElementById("lower-case");
 const numberInput = document.getElementById("numbers");
 const symbolInput = document.getElementById("symbols");


 const getRandomData = function(dateset) {

     return dateset[Math.floor(Math.random() * dateset.length)]; 
 }

 const generatePassword = (password = "") =>{
     if(upperInput.checked){
          password += getRandomData(upperSet)
     }
     if (lowerInput.checked) {
       password += getRandomData(lowerSet);
     }
     if (numberInput.checked) {
       password += getRandomData(numberSet);
     }
     if (symbolInput.checked) {
       password += getRandomData(symbolSet);
     }
     if (password.length <= totalChar.value) {
       return generatePassword(password);
     }
     passBox.innerText = truncateString(password, totalChar.value);
 }

document.getElementById("btn").addEventListener("click", function(e) {
      generatePassword();
 }, false);


 function truncateString(str ,num ){
     if (str.length > num){
          let subStr = str.substring(0, num);
          return subStr;
     }
     else{
          return str;
     }

 }
