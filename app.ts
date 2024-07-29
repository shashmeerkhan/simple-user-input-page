const age1= document.getElementById("num1") as HTMLInputElement;
const name1 = document.getElementById("name") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const printbutton = document.getElementById("printbutton") as HTMLButtonElement;
const enterednumber = document.getElementById("enterednumber") as HTMLOutputElement;

function printenteredvalue(): void {
    const name = name1.value;  // Getting the value as a string
    const email1 = email.value;  // Getting the value as a string
    const age = age1.value;  // Getting the value as a string

    enterednumber.innerHTML = `
    Name: ${name}<br>
    Email: ${email1}<br>
    Age: ${age}`;
}

printbutton.addEventListener("click", printenteredvalue);
