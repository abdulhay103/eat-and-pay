import React from "react";
import datas from "../../utilities/data";
import Button from "../../utilities/Button";
import Friend from "./friend";

const FriendList = () => {
  let friends = datas;
  return (
    <div>
      <ul className=" w-1/2 bg-slate-100 p-5 rounded shadow">
        {friends.map((friend) => {
          return (
            <Friend
              image={friend.image}
              name={friend.name}
              id={friend.id}
              balance={friend.balance}
            />
          );
        })}
        <Button bgColor="bg-orange-500">Add Friend</Button>
      </ul>
    </div>
  );
};

export default FriendList;
