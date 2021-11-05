import React from "react";
import cn from 'classnames'

const Button = ({ appearance,  children, ...props }) => {

  return (
    <div>
      <button  className={cn(
        "btn btn__lg",
        !appearance? "btn__primary": "btn__secondary"
      )}  {...props} >
        {children}
      </button>
    </div>
  );
};

export default Button;
