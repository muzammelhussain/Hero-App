import React from "react";

const Description = ({ description }) => {
  const descriptionData = description;
  return (
    <div>
      <h1 className="mt-4 text-2xl font-bold text-[#001931]">Description</h1>
      {/* I tried to add more words in description but i do not know why json file
      did not save the addition. */}
      <p className="text-[#627382] py-4">{descriptionData}</p>
    </div>
  );
};

export default Description;
