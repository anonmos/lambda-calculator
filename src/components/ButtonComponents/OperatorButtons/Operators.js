import React, {useState} from "react";
import {operators as operatorsArray} from '../../../data'
import OperatorButton from './OperatorButton'

const Operators = () => {
  // STEP 2 - add the imported data to state
  let [operators, setOperators] = useState(operatorsArray)

  return (
    <div>
      {operators.map((operator) => {
        return <OperatorButton value={operator} />
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators
