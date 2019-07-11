import React, {useContext} from "react";
import {CalcActionEventComm} from '../../State'

const Display = (props) => {
  return <div className="display"><div className="display-content">{props.value}</div></div>;
};

export default Display
