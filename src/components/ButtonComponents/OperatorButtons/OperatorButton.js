import React from "react";

const OperatorButton = (props) => {
  return (
    <div className="number-button operator">
      <div className="value">
        {props.value.char}
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default OperatorButton
