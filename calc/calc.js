let input = document.querySelector("#input");
let buttonText;
buttons = document.querySelectorAll("button");
let inputValue = "";
for (btn of buttons) {
btn.addEventListener("click", (e) => {
buttonText = e.target.innerText;
// console.log('Button text is ', buttonText);
if (buttonText == "AC") {
inputValue = "";
input.innerText = inputValue;
} else if (buttonText == "=") {
try {
input.innerText = eval(inputValue);
} catch (err) {
input.innerText = "Error !!!";
}
} 
else {
inputValue += buttonText;
input.innerText = inputValue;
}

});

}