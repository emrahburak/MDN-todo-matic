import React from "react";

const Button = ({ status, children, ...props }) => {
  return (
    <div>
      <button type="button" className="btn toggle-btn" {...props}>
        {children}
      </button>
      {/* {status && (
        <button type="button" className="btn toggle-btn" {...props}>
          {children}
        </button>
      )} */}
    </div>
  );
};

export default Button;
