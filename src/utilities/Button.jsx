import React from "react";

const Button = ({ children }) => {
  return (
    <button className="py-2 px-4 rounded-full bg-blue-600 text-white">
      {children}
    </button>
  );
};

export default Button;
