import React from "react";

const Installation = () => {
  return (
    <div>
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] my-4">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>
      <div className="flex justify-between mb-4 mx-3">
        <div>
          <h1 className="text-2xl font-bold text-[#001931]">
            {/* ({appsLength}) Apps Found */}
          </h1>
        </div>
        <div>
          <label className="input">
            <input
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Installation;
