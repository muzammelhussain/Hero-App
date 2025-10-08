import React from "react";
import AppsCard from "./AppsCard";

const AppsCards = ({ appsData }) => {
  const appsData1 = appsData;
  const appsLength = appsData1.length;
  console.log(appsLength);
  return (
    <div className="">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[#627382] my-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mb-4 mx-8">
        <div>
          <h1 className="text-2xl font-bold text-[#001931]">
            ({appsLength}) Apps Found
          </h1>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {appsData1.map((appData) => (
          <AppsCard appData={appData} key={appData.id}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default AppsCards;
