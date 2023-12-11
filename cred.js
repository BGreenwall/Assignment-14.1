function check() { //creating function
    var firstName = document.getElementById("firstname").value;  //getting first name input
    var lastName = document.getElementById("lastname").value; //getting last name input
    var zipCode = document.getElementById("zipcode").value; //getting zipcode input
    var fullName = firstName + " " + lastName;  //concating the first and last name with a space


    if (fullName.length > 20 || zipCode.length > 5) {  //if statement, for if first + last > 20 or zip > 5 then print out that message
        document.getElementById("result").innerHTML = "Too many characters, please try again.";  //message
    } else {
        document.getElementById("result").innerHTML = "Congrats! You're Awesome!"; //  else statement then the secrete message gets printed
    }
}