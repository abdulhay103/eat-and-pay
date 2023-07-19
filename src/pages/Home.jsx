import React from "react";
import SectionHeader from "../components/headers/SectionHeader";
import FriendList from "../components/friends/FriendList";

const Home = () => {
  return (
    <div className=" container mx-auto pb-20">
      <SectionHeader>Bill Calculation:</SectionHeader>
      <FriendList />
    </div>
  );
};

export default Home;
