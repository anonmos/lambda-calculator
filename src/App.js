import React, {useState} from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  let [display, setDisplay] = useState("")
  let [previousNumber, setPreviousNumberVal] = useState("")
  let [operator, setOperator] = useState("")
  let [clearDisplayOnNextOperation, setShouldClearDisplayOnNextOperation] = useState(false)

  let numberOnClickHandler = function(value) {
      if (clearDisplayOnNextOperation) {
        setDisplay(value)
        setShouldClearDisplayOnNextOperation(false)
      } else if (value === ".") {
        if (display.indexOf('.') === -1) {
          setDisplay(display + value)
        }
      } else {
        setDisplay(display + value)
      }
  }

  let operatorOnClickHandler = function(value) {
      if (operator.length > 0 && operator !== "=") {
        performOperation()
        setOperator(value)
      } else if (operator.length > 0 && operator === "=") {
        performOperation()
        setOperator("")
      } else {
        setOperator(value)
      }

      setPreviousNumberVal(display)
      setShouldClearDisplayOnNextOperation(true)
  }

  let specialOnClickHandler = function(value) {
    if (value === "C") {
      setDisplay("")
      setPreviousNumberVal("")
      setOperator("")
      setShouldClearDisplayOnNextOperation(false)
    } else if (value === "x/-" && display.length > 0) {

      if (display[0] !== '-') {
        setDisplay("-" + display)
      } else if (display[0] === "-") {
        setDisplay(display.slice(1, display.length))
      }
    } else if (value === "%" && display.length > 0) {
      let displayVal = parseFloat(display)
      setDisplay(displayVal * .01)
    }
  }

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
