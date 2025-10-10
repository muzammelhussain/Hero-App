import React from "react";
import { useLoaderData } from "react-router";
import AppsCards from "./AppsCards";
import UseLoader from "../../Components/UseLoader/UseLoader";
import Spinner from "../../Components/Spinner/Spinner";

const Apps = () => {
  const appsData = useLoaderData();
  const loading = UseLoader(2000);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-3/4 mx-auto">
        <AppsCards appsData={appsData}></AppsCards>
      </div>
    </div>
  );
};

export default Apps;
