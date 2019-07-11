import React from "react";

const SpecialButton = (props) => {
  function handleClick() {
    props.onClickHandler(props.value)
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
