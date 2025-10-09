import React, { useState } from "react";
import AppsCard from "./AppsCard";
import ErrorPage2 from "../Error/ErrorPage2";

const AppsCards = ({ appsData }) => {
  const appsData1 = appsData;

  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

  const searchedApps = term
    ? appsData1.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : appsData1;
  console.log(searchedApps);
  const appsLength = searchedApps.length;
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
      <div className="flex justify-between mb-4 mx-3">
        <div>
          <h1 className="text-2xl font-bold text-[#001931]">
            ({appsLength}) Apps Found
          </h1>
        </div>
        <div>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>

      {appsLength > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 pb-24">
          {searchedApps.map((appData) => (
            <AppsCard appData={appData} key={appData.id}></AppsCard>
          ))}
        </div>
      ) : (
        <ErrorPage2></ErrorPage2>
      )}
    </div>
  );
};

export default AppsCards;
