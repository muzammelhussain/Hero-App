import React from "react";

const Description = ({ description }) => {
  const descriptionData = description;
  return (
    <div>
      <h1 className="mt-4 text-2xl font-bold text-[#001931]">Description</h1>
      <p className="text-[#627382] py-4">{descriptionData}</p>
    </div>
  );
};

export default Description;
