import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="number-button special">
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
