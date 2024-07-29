var age1 = document.getElementById("num1");
var name1 = document.getElementById("name");
var email = document.getElementById("email");
var printbutton = document.getElementById("printbutton");
var enterednumber = document.getElementById("enterednumber");
function printenteredvalue() {
    var name = name1.value; // Getting the value as a string
    var email1 = email.value; // Getting the value as a string
    var age = age1.value; // Getting the value as a string
    enterednumber.innerHTML = "\n    Name: ".concat(name, "<br>\n    Email: ").concat(email1, "<br>\n    Age: ").concat(age);
}
printbutton.addEventListener("click", printenteredvalue);
