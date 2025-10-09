import React from "react";
import { useLoaderData, useParams } from "react-router";
import Download from "../../assets/img/icon-downloads.png";
import Rating from "../../assets/img/icon-ratings.png";
import Review from "../../assets/img/icon-review.png";
import Ratings from "./Ratings";

const AppsDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appId);
  console.log(singleData);
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

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 ml-5 border-b-2 border-b-gray-200 w-full mx-auto">
        <div className="mt-5 mb-4 ">
          <img className="h-[250px] w-[250px]" src={image} alt="" />
        </div>
        <div>
          <div className="border-b-2 border-b-gray-200 ">
            <h1 className="mt-4 text-2xl font-bold text-[#001931]">{title}</h1>
            <p className="text-[#627382] my-4">Developed by: {companyName}</p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row mt-5 ">
              <div>
                <img className="w-5 h-5 " src={Download} alt="" />
                <p className="my-2">Downloads</p>
                <h1 className="text-2xl font-bold text-[#001931]">
                  {downloads}
                </h1>
              </div>
              <div className="my-5 md:mx-10 ">
                <img className="w-5 h-5 " src={Rating} alt="" />
                <p className="my-2">Average Ratings</p>
                <h1 className=" text-2xl font-bold text-[#001931]">
                  {ratingAvg}
                </h1>
              </div>
              <div>
                <img className="w-5 h-5 " src={Review} alt="" />
                <p className="my-2">Total Reviews</p>
                <h1 className=" text-2xl font-bold text-[#001931]">
                  {reviews}
                </h1>
              </div>
            </div>
            <button className="btn mt-3 bg-[#00D390] text-white">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
      <Ratings ratings={ratings}></Ratings>
    </div>
  );
};

export default AppsDetails;
