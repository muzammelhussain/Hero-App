import React from "react";
import { useLoaderData } from "react-router";
import AppsCards from "./AppsCards";

const Apps = () => {
  const appsData = useLoaderData();
  console.log(appsData);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-3/4 mx-auto">
        <AppsCards appsData={appsData}></AppsCards>
      </div>
    </div>
  );
};

export default Apps;
