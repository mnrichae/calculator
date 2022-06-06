//set variables
let prevDisplay  = null, currDisplay = null, operator = null, results = null, floatNumber = false, endResult = false;

//change the display result with the current number
function display(newDisplay){
  document.getElementsByClassName("output")[0].setAttribute("value", newDisplay);
}

//start of functions

//logic flow of calculator operations
function logicFlow(op1){
  if(prevDisplay != null && currDisplay != null && operator != null){
    results = calculate(prevDisplay, currDisplay, operator);
    operator = op1;
    prevDisplay = results;
    currDisplay = null;
    display(results);
  } else if(prevDisplay == null && currDisplay != null && operator == null){
      operator = op1;
      prevDisplay = currDisplay;
      currDisplay = null;
      display(prevDisplay);
  } else if(prevDisplay == null && currDisplay == null && operator == null){
    display("0");
  } 
 
}

//basic calculation using operators
function calculate(op1, op2, operator){
  switch (operator) {
        case "divide":
            return op1 / op2;
            break;
        case "multiply":
            return op1 * op2;
            break;
        case "add":
            return +op1 + +op2; //to avoid concatenation
            break;
        case "subtract":
            return op1 - op2;
            break;
  }
}

//
function equals() {
  if(endResult){
    currDisplay = results;
    prevDisplay = null;
    operator = null; 
    results = null;
    floatNumber  = null;
    endResult = false;
    display(currDisplay);
  }
}

function btn(op1) {
  let promptOperand = op1.getAttribute("value"); //prompt operand

  switch (promptOperand){
        case "all-clear":
            currDisplay = null;
            prevDisplay = null;
            operator = null;
            results = null;
            floatNumber = false;
            endResult = false;
            display("0");
            break;

        case "clear":
            currDisplay = null;
            // prevDisplay = null;
            // operator = null;
            results = null;
            floatNumber = false;
            endResult = false;
            document.getElementsByClassName("clear")[0].innerHTML = "AC";
            document.getElementsByClassName("clear")[0].setAttribute("value", "all-clear"); //to move to AC
            display("0");
            break;

        case "percent":
            if(results != null){
              display(results /= 100);
            } else
            if(currDisplay != null){
              display(currDisplay /= 100);
            }
            break;

        case "opposite":
            if(results != null){
              display(results *= -1);
            } else
            if(currDisplay != null){
              display(currDisplay *= -1);
            }
            break;

        case "divide":
            equals();
            logicFlow(promptOperand);
            break;

        case "multiply":
            equals();
            logicFlow(promptOperand);
            break;

        case "subtract":
            equals();
            logicFlow(promptOperand);
            break;

        case "add":
            equals();
            logicFlow(promptOperand);
            break;


        case "equals":
            if(prevDisplay != null && currDisplay != null && operator != null){
              results = calculate(prevDisplay, currDisplay, operator);
              prevDisplay = results;
              display(results);
              endResult = true;
            } 
            break;

        default:
            document.getElementsByClassName("clear")[0].innerHTML = "C";
            document.getElementsByClassName("clear")[0].setAttribute("value", "clear");
            (currDisplay == null) ? currDisplay = promptOperand : currDisplay += myValue;
            display(currDisplay);
            break;

  } 
} 
