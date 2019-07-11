import React, {useState} from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'


function App() {
  // Bound to the display component directly.  Whatever is in this var shows up on the display
  let [display, setDisplay] = useState("")

  // Keeps track of the previous display value for calculation purposes
  let [previousNumber, setPreviousNumberVal] = useState("")

  // Keeps track of the operator (+, -, x, /)
  let [operator, setOperator] = useState("")

  // Keeps track of when we should clear the display before adding more numbers
  // (e.g. Once you've press 5 +, the display should clear for the next set of numbers)
  let [clearDisplayOnNextOperation, setShouldClearDisplayOnNextOperation] = useState(false)

  // Normal calculators allow you to press an operator twice as an "equals" sign.  MacOS calculators
  // Allow you to continue pressing it, but all that happens is it sets the next operator.  This keeps
  // track of the case where the user has hit an operator 3 or more times and makes sure nothing happens
  let [nextOperationLockout, setNextOperationLockout] = useState(true)

  let numberOnClickHandler = function(value) {
      // A number has been pressed, clear the operation lockout (so we can press an operator twice and have it act like "=")
      setNextOperationLockout(false)

      // If we've pressed something like 5 +, the next number should clear the screen and only show that input, and save the previous value
      if (clearDisplayOnNextOperation) {
        setPreviousNumberVal(display)
        setDisplay(value)
        setShouldClearDisplayOnNextOperation(false)
      } 
      // Special case for decimals.  We can't really have more than two decimal points on the screen.  Make sure one doesn't
      // already exist.  If it doesn't, allow it to be added to the display
      else if (value === ".") {
        if (display.indexOf('.') === -1) {
          setDisplay(display + value)
        }
      } 
      // Otherwise we only have a number.  So take the current display value, append the new value, and set that as the new display value
      else {
        setDisplay(display + value)
      }
  }

  let operatorOnClickHandler = function(value) {
      // If the user has pressed a standard operator (+ - x /) once already, we need the second press to act like they pressed "=".
      if (operator.length > 0 && operator !== "=") {
        // ... but only on the second press.  Otherwise the third press should just set the operator to the new value.
        if (!nextOperationLockout) {
          performOperation()
          setNextOperationLockout(true)
        }
        setOperator(value)
      } 
      // Special case handling for the "=" sign.  We should perform whatever the user set as the operator, display the outcome,
      // then reset the rest of the state
      // NOTE:  There's a bug here.  What what the state does if you press "=" multiple times, then try to perform a new operation.
      // Bonus points for finding it and fixing it.
      else if (operator.length > 0 && operator === "=") {
        performOperation()
        setOperator("")
        setPreviousNumberVal("")
      } 
      // There wasn't any operator (the calculator is starting fresh), so simply just set the operator and move on
      else {
        setOperator(value)
      }

      // Set the previous number as the current number, then clear the screen after we've performed an operation
      setPreviousNumberVal(display)
      setShouldClearDisplayOnNextOperation(true)
  }

  let specialOnClickHandler = function(value) {
    // User pressed the "C" button.  We should reset the state back to nothingness.
    if (value === "C") {
      setDisplay("")
      setPreviousNumberVal("")
      setOperator("")
      setShouldClearDisplayOnNextOperation(false)
    } 
    // "+/-" key was pressed.  Check if there actually is a number present on the screen.
    else if (value === "x/-" && display.length > 0) {

      // ... then check if there is already a minus sign.  If there isn't, prepend one to the beginning of the display
      if (display[0] !== '-') {
        setDisplay("-" + display)
      } 
      // Otherwise, slice it off of the beginning of the string
      else if (display[0] === "-") {
        setDisplay(display.slice(1, display.length))
      }
    } 
    // "%" key was pressed.  This is the equivalent of multiplying by .01, so do that if there is something
    // on the screen.
    else if (value === "%" && display.length > 0) {
      let displayVal = parseFloat(display)
      setDisplay(displayVal * .01)
    }
  }

  // Perform a basic operation based on what's in the operator state, and write that directly to the screen
  let performOperation = function() {
    const firstValue = parseFloat(display)
    const secondValue = parseFloat(previousNumber)

    switch (operator) {
			case "+":
				setDisplay(secondValue + firstValue)
				break;
			case "-":
				setDisplay(secondValue - firstValue);
				break;
			case "/":
				setDisplay(secondValue / firstValue)
				break;
			case "*":
				setDisplay(secondValue * firstValue)
				break;
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {<Display value={display} />}
        <div className="keys">
          <div className="keypad">
            {<Specials onClickHandler={specialOnClickHandler} />}
            {<Numbers onClickHandler={numberOnClickHandler} />}
          </div>
          <div className="operators-container">
            {<Operators onClickHandler={operatorOnClickHandler} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
