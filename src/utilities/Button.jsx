import React from "react";

const Button = ({ children, bgColor }) => {
  return (
    <button className={`py-2 px-4 rounded-full ${bgColor} text-white`}>
      {children}
    </button>
  );
};

export default Button;
