import React from "react";
import SectionHeader from "../components/headers/SectionHeader";
import FriendList from "../components/friends/FriendList";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <SectionHeader>Bill Calculation:</SectionHeader>
      <FriendList />
    </div>
  );
};

export default Home;
