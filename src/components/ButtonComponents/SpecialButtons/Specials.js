import React, {useState} from "react";
import {specials as specialsArray} from '../../../data'
import SpecialButton from './SpecialButton'


const Specials = () => {
  // STEP 2 - add the imported data to state
  let [specials] = useState(specialsArray)

  return (
    <div className="specials-container">
      {
        specials.map((special, i) => {
          return <SpecialButton key={i} value={special} />
        })
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials
