import React from "react";

const OperatorButton = (props) => {

  function onClickHandler() {
    props.onClickHandler(props.value.value)
  }
  return (
    <div className="number-button operator" onClick={onClickHandler}>
      <div className="value">
        {props.value.char}
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default OperatorButton
