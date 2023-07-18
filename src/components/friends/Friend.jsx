import React from "react";
import Button from "../../utilities/Button";

const Friend = ({ id, image, name, balance }) => {
  return (
    <li
      key={id}
      className=" flex items-center justify-around mb-3 bg-white rounded border-b-2 py-2 border-blue-500 border-l-4"
    >
      <div className="overflow-hidden">
        <img src={image} alt="" className="rounded-full" />
      </div>
      <div className=" w-1/2">
        <h2 className=" text-lg font-bold text-blue-600">{name}</h2>
        <p className=" text-orange-500">
          My available balance is: {balance} taka.
        </p>
      </div>
      <Button bgColor="bg-blue-600">Select</Button>
    </li>
  );
};

export default Friend;
