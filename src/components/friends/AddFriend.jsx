import React from "react";

const AddFriend = () => {
  return (
    <div className="flex gap-5">
      <div className=" flex justify-center items-center w-1/4 p-5 bg-white rounded-lg ring-2">
        <h2 className=" text-lg font-bold text-orange-600">
          Add Your Friend Details
        </h2>
      </div>
      <div className=" w-9/12">
        <input
          type="text"
          placeholder="Your friend name."
          className=" w-full px-3 py-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Image link"
          className=" w-full px-3 py-2 rounded mb-3"
        />
      </div>
    </div>
  );
};

export default AddFriend;
