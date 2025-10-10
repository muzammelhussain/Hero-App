import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl text-blue-500"></span>
      </div>
    </div>
  );
};

export default Spinner;
