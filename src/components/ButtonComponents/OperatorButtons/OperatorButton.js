import React from "react";

const OperatorButton = (props) => {
  return (
    <div>
      {props.value.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default OperatorButton