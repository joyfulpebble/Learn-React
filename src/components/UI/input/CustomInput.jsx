import React from 'react';
import classes from "./CustomInput.module.css";

{/*Управляемый эелемент*/}
/*const CustomInput = React.forwardRef((props, ref) => {
  return (
      <input ref={ref} className={classes.customInput} {...props}/>
  );
});*/

const CustomInput = (props) => {
  return (
      <input className={classes.customInput} {...props}/>
  );
};

export default CustomInput;