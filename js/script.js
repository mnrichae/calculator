//set variables
let prevDisplay  = null, currDisplay = null, operator = null, results = null, floatNumber = false, endResult = false;

//change the display result with the current number
function display(newDisplay){
  document.getElementsByClassName("output")[0].setAttribute("value", newDisplay);
}

//start of functions

//logic flow of calculator operations
function logicFlow(op1){
  //continuous operation from an operant
  if(prevDisplay != null && currDisplay != null && operator != null){
    results = calculate(prevDisplay, currDisplay, operator);
    operator = op1;
    prevDisplay = results;
    currDisplay = null;
    display(results);
    console.log("logicFlow first if")
    //from 0 
  } else if(prevDisplay == null && currDisplay != null && operator == null){
      operator = op1;
      prevDisplay = currDisplay;
      currDisplay = null;
      display(prevDisplay);
      console.log("logicFlow second if")
  } else if(prevDisplay == null && currDisplay == null && operator == null){
    // display("0");
    // allClear();
      console.log("logicFlow third if")
  } 
 console.log("function logicFlow successful")
}

//basic calculation using operators called inside logicFlow()
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
  console.log("function equals successful")
}


function btn(op1) {
  let promptButton = op1.getAttribute("value"); //prompt operand

  switch (promptButton){
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
            currDisplay = null; // <--only current display is affected
            // prevDisplay = null; <-- prev display will not be affected
            // operator = null; <-- prev operator will not be affect
            results = null;
            floatNumber = false;
            endResult = false;
            document.getElementsByClassName("clear")[0].innerHTML = "AC"; //from C to AC
            document.getElementsByClassName("clear")[0].setAttribute("value", "all-clear"); 
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

        case "posneg":
            if(results != null){
              display(results *= -1);
            } else
            if(currDisplay != null){
              display(currDisplay *= -1);
            }
            break;

        case "divide":
            equals();
            logicFlow(promptButton);
            break;

        case "multiply":
            equals();
            logicFlow(promptButton);
            break;

        case "subtract":
            equals();
            logicFlow(promptButton);
            break;

        case "add":
            // equals();
            logicFlow(promptButton);
            break;
            console.log("case add");

        case "equals":
            if(prevDisplay != null && currDisplay != null && operator != null){
              results = calculate(prevDisplay, currDisplay, operator);
              prevDisplay = results;
              display(results);
              endResult = true;
              currDisplay = null;
              prevDisplay = null;
              operator = null;
              results = null;
              floatNumber = false;
              endResult = false;
              console.log("case equals first if")
            }
            console.log("case equals successful")
            break;

        default:
            document.getElementsByClassName("clear")[0].innerHTML = "C"; //from AC to C
            document.getElementsByClassName("clear")[0].setAttribute("value", "clear");
            (currDisplay == null) ? currDisplay = promptButton : currDisplay += promptButton;
            display(currDisplay);
            break;

  } 
} 