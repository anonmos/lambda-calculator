import React, {useContext} from "react";
import {CalcActionEventComm, ACTION_CLEAR} from '../../../State'

const SpecialButton = (props) => {

  const contextBundle = useContext(CalcActionEventComm);
  function handleClick() {
    if (props.value === "C")
    contextBundle.dispatch({type: ACTION_CLEAR})
  }

  return (
    <div className="number-button special" onClick={handleClick}>
      {
        <div className="value">
          {props.value}
        </div>
      }
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default SpecialButton
