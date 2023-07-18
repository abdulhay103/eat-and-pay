import React, { Children } from "react";

const SectionHeader = ({ children }) => {
  return (
    <>
      <h1 className=" text-3xl text-green-600 text-center py-5 font-extrabold underline">
        {children}
      </h1>
    </>
  );
};

export default SectionHeader;
