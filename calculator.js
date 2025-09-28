 
 //Get all the button elements
 const buttons = document.querySelectorAll(".calc-button")
 //Get all the display elements
 const display = document.querySelector(".calc-display")

 let firstOperand = null;
 let operator = null;
 let currentOperand = "";

 //listeners
 buttons.forEach((button) => {
    button.addEventListener("click", (event)=>{
        const target = event.target;
        const value = target.innerText;
        if(target.id == "clear"){
            firstOperand = null;
            operator = null;
            currentOperand = "";
            display.innerText = "";
        } else if(target.id == "plus-minus") {
            display.innerText = -1 * display.innerText;
        } else if(target.id == "percentage"){
            display.innerText = parseFloat(display.innerText) / 100; 
        } else if(
            target.id == "divide" ||
            target.id=="multiply" ||
            target.id == "subtract" ||
            target.id == "add" ){
            operator = value;
            firstOperand = parseFloat(display.innerText);
            currentOperand = "";
        } else if(target.id == "equals"){
            const secondOperand = parseFloat(display.innerText)
            if(operator === "+") {
                firstOperand = firstOperand + secondOperand
            } else if(operator === "-"){
                firstOperand = firstOperand - secondOperand
            } else if(operator === "×"){
                firstOperand = firstOperand * secondOperand
            } else if(operator === "÷"){
                firstOperand = firstOperand / secondOperand
            }
            operator = null
            currentOperand = firstOperand.toString();
            display.innerText = firstOperand;
        } else {
            if(value === "." && currentOperand.includes(".")){
                return
            }
            currentOperand += value;
            display.innerText = currentOperand;
        }
    });
 });
