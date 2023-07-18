import React, { useState } from "react";

const ToggleComponent = () => {
  let [toggle, setToggle] = useState(false);

  const toogleHandler = () => {
    setToggle((showBtn) => !showBtn);
  };
  const buttonStyle = {
    padding: "10px 20px",
    border: "2px solid #333",
    borderRadius: "4px",
  };
  return (
    <div>
      {toggle && <p>Lorem ipsum dolor sit amet.</p>}
      <button
        style={buttonStyle}
        onClick={() => {
          toogleHandler();
        }}
      >
        {toggle ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

export default ToggleComponent;
