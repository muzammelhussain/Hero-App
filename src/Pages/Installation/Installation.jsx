import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { getInstallApp } from "../../utility/addToDB";
import InstalledCard from "./InstalledCard";
import UseLoader from "../../Components/UseLoader/UseLoader";
import Spinner from "../../Components/Spinner/Spinner";

const Installation = () => {
  const [sort, setSort] = useState("");
  const data = useLoaderData() || [];
  const installAppsData = getInstallApp() || [];
  const convertedInstallAppsData = installAppsData.map((id) => parseInt(id));

  const [installedData, setInstalledData] = useState(
    data.filter((app) => convertedInstallAppsData.includes(app.id))
  );

  const installedDataLength = installedData.length;

  const onUninstall = (id) => {
    const updated = installedData.filter((app) => app.id !== parseInt(id));
    setInstalledData(updated);
  };

  const loading = UseLoader(2000);

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleSort = (type) => {
    setSort(type);

    if (type === "Low") {
      const sortedByHigh = [...installedData].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalledData(sortedByHigh);
      console.log(sortedByHigh);
    }

    if (type === "High") {
      const sortedByHigh = [...installedData].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalledData(sortedByHigh);
      console.log(sortedByHigh);
    }
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto pb-16">
        <div className="text-center bg-[#F5F5F5] py-16">
          <h1 className="text-5xl font-bold text-[#001931]">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] my-4">
            Explore All Trending Apps on the Market developed by us{" "}
          </p>
        </div>
        <div className="flex justify-between  ">
          <div>
            <h1 className="text-2xl font-bold text-[#001931]">
              ({installedDataLength}) Apps Found
            </h1>
          </div>
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1  bg-white text-black"
              >
                Sort by : {sort ? sort : ""}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white text-black rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a onClick={() => handleSort("High")}>High - Low</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Low")}>Low - High</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5 my-16">
          {installedData.map((data) => (
            <InstalledCard
              key={data.id}
              data={data}
              onUninstall={onUninstall}
            ></InstalledCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
