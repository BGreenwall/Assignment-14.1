function findsum() {

 var rn1 = Math.floor(Math.random() * 6) + 1;//creating random number 1
 var rn2 = Math.floor(Math.random() * 6) + 1;//creating random number 2
 sum = rn1 + rn2;//summing the 2 numbers

}
 function displayResult() {
   if (sum > 7) {//conditional if statement for sum greater than 7
  document.getElementById("answer").innerHTML = "You Win!"//replacing id tag with you win
   }
   else if (sum < 7){//conditional else if for sum less than 7
   document.getElementById("answer").innerHTML = "You Lose!"//replacing id tag with yuou lose
   }
   else{
   document.getElementById("answer").innerHTML = "Blackout!"//else statement for random number 1 equeals random number 2
   }
 
   }