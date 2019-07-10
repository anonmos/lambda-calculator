import React from "react";

export const ACTION_CONCATENATE = "concatenate"
export const ACTION_CLEAR = "clear"

export const buttonPressReducer = function(state, action) {
    console.log(`Got the dispatch with state: ${JSON.stringify(state)}, action: ${JSON.stringify(action)}`)
    switch (action.type) {
      case ACTION_CONCATENATE: 
        return {displayValue: state.displayValue += action.value}
      case ACTION_CLEAR:
      default:
        return {displayValue: ""}
    }
  }
  export const CalcActionEventComm = React.createContext(null)