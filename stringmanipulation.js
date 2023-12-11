document.getElementById('reverseButton').addEventListener('click', function() { //getting id from button
  var input = document.getElementById('inputString').value;  //making variable for easier use
  var output = '';

  if (input === '') { //if statement for if it is blank then a message prints to enter a word
    output = 'Please enter a word!';
  } else { //else statement, that create inputlenth into an array, stepping through it backwards (i--)
    for (var i = input.length - 1; i >= 0; i--) {
      output += input[i];
    }
  }

  document.getElementById('output').innerText = output; //send result back to html
});