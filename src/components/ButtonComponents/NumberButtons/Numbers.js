import React, {useState} from "react";
import NumberButton from "./NumberButton"
import {numbers as numbersArray} from '../../../data'

const Numbers = () => {
  // STEP 2 - add the imported data to state
  let [numbers, setNumbers] = useState(numbersArray)

  // [<NumberButton value="1",
  //    <NumberButton value="2",
  //     ]

  return (
    <div>
      {numbers.map((number) => {
        return <NumberButton value={number} />
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers
