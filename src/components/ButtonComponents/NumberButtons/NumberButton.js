import React from "react";

const NumberButton = (props) => {
  let classes = 'number-button'
  if (props.wide) {
    classes += ' wide'
  }

  function handleClick() {
    if (props.onClickHandler && typeof props.onClickHandler === "function") {
      props.onClickHandler(props.value)
    }
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
