import React from "react";

const NumberButton = (props) => {
  return (
    <div class="number-button">
      {props.value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton
