import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Download from "../../assets/img/icon-downloads.png";
import Rating from "../../assets/img/icon-ratings.png";
import Review from "../../assets/img/icon-review.png";
import Ratings from "./Ratings";
import Description from "./Description";
import { toast } from "react-toastify";
import { addToInstalledDB, getInstallApp } from "../../utility/addToDB";
import UseLoader from "../../Components/UseLoader/UseLoader";
import Spinner from "../../Components/Spinner/Spinner";

const AppsDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appId);

  const [install, setInstall] = useState(false);

  useEffect(() => {
    const installed = getInstallApp(); // returns array of installed IDs
    if (installed.includes(id)) {
      setInstall(true);
    }
  }, [id]);

  const installHandler = () => {
    if (!install) {
      setInstall(true);
      addToInstalledDB(id);
      toast.success("✅ App Installed Successfully!");
    } else {
      toast.info("App is already installed.");
    }
  };

  const {
    companyName,
    image,
    reviews,
    ratings,
    size,
    downloads,
    ratingAvg,
    title,

    description,
  } = singleData;

  const loading = UseLoader(2000);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center gap-5  border-b-2 border-b-gray-200 ">
          <div className="mt-5 mb-4 ">
            <img
              className="h-[200px] md:h-[250px] w-[200px] md:w-[250px]"
              src={image}
              alt=""
            />
          </div>
          <div>
            <div className="border-b-2 border-b-gray-200 flex flex-col w-full">
              <h1 className="mt-4 text-2xl font-bold text-[#001931]">
                {title}
              </h1>
              <p className="text-[#627382] my-4">Developed by: {companyName}</p>
            </div>
            <div>
              <div className="flex flex-col md:flex-row mt-2 gap-5">
                <div>
                  <img className="w-5 h-5 " src={Download} alt="" />
                  <p className="text-black">Downloads</p>
                  <h1 className="text-lg md:text-2xl font-bold text-[#001931]">
                    {downloads}
                  </h1>
                </div>
                <div className=" ">
                  <img className="w-5 h-5 " src={Rating} alt="" />
                  <p className="text-black">Average Ratings</p>
                  <h1 className=" text-lg md:text-2xl font-bold text-[#001931]">
                    {ratingAvg}
                  </h1>
                </div>
                <div>
                  <img className="w-5 h-5 " src={Review} alt="" />
                  <p className="text-black">Total Reviews</p>
                  <h1 className=" text-lg md:text-2xl font-bold text-[#001931]">
                    {reviews}
                  </h1>
                </div>
              </div>
              <button
                onClick={installHandler}
                className={`btn mt-5 text-black border-gray-200 ${
                  install ? "bg-base-200 " : "bg-[#00D390]"
                }`}
                disabled={install}
              >
                {install ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>
        <Ratings ratings={ratings}></Ratings>
        <Description description={description}></Description>
        {/* I tried to adding more word in description, but i couldn't add the data in json file after fetching data. */}
      </div>
    </div>
  );
};

export default AppsDetails;
