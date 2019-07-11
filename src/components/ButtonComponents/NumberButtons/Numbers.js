import React, {useState} from "react";
import NumberButton from "./NumberButton"
import {numbers as numbersArray} from '../../../data'

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  let [numbers] = useState(numbersArray)

  let firstRow = numbers.slice(0, 3)
  let secondRow = numbers.slice(3, 6)
  let thirdRow = numbers.slice(6, 9)

  return (
    <div className="number-container">
      <div className="number-row">
        {firstRow.map((number, i) => {
          return <NumberButton key={i} value={number} onClickHandler={props.onClickHandler} />
        })}
      </div>
      <div className="number-row">
        {secondRow.map((number, i) => {
          return <NumberButton key={i} value={number} onClickHandler={props.onClickHandler} />
        })}
      </div>
      <div className="number-row">
        {thirdRow.map((number, i) => {
          return <NumberButton key={i} value={number} onClickHandler={props.onClickHandler} />
        })}
      </div>
      <div className="number-row">
        <NumberButton value={numbers[numbers.length - 2]} wide={true} onClickHandler={props.onClickHandler} />
        <NumberButton value={numbers[numbers.length - 1]} onClickHandler={props.onClickHandler}/>
      </div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers
