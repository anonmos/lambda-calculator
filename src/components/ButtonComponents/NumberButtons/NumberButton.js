import React, {useContext} from "react";
import {CalcActionEventComm, ACTION_CONCATENATE} from '../../../State'

const NumberButton = (props) => {

  const contextBundle = useContext(CalcActionEventComm);

  let classes = 'number-button'
  if (props.wide) {
    classes += ' wide'
  }

  function handleClick() {
    console.log(`Clicked ${props.value}`)
    contextBundle.dispatch({type: ACTION_CONCATENATE, value: props.value})
  }

  return (
    <div className={classes} onClick={handleClick}>
      <div className="value">
        {props.value}
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton
