import React from "react";
import HomeCard from "./HomeCard";

const HomeCards = ({ appData }) => {
  const appsData = appData;

  return (
    <div className="max-w-11/12 mx-auto my-16">
      <div className="text-center">
        <h1 className="text-[32px] text-[#001931] font-bold">Trending Apps</h1>
        <p className="text-[#627382] my-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {appsData.map((appData) => (
          <HomeCard appData={appData} key={appData.id}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
