import React, { useState } from "react";
import Button from "../../utilities/Button";

const AddFriend = () => {
  let imageUrl = "https://i.pravatar.cc/75"
  let [name, setName]=useState("");
  let [image, setImage] =useState(imageUrl);

  const addFriendHandler = ()=>{

    if (!name || !image) return;

    let id = crypto.randomUUID();
    console.log(id);

    console.log("ok");
    let newFriend = {
      id,
      name,
      image:`${image}?=${id}`,
      balance:0
    }
  }
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
      <Button handler={addFriendHandler} bgColor="bg-red-500">Click</Button>
    </div>
  );
};

export default AddFriend;
