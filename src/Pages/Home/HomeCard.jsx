import React from "react";
import Download from "../../assets/img/icon-downloads.png";
import Rating from "../../assets/img/icon-ratings.png";

const HomeCard = ({ appData }) => {
  const { image, downloads, ratingAvg } = appData;

  return (
    <div>
      <div className="card bg-base-100 w-72 shadow-sm flex flex-col h-full">
        <figure className="px-5 pt-5 flex-grow">
          <img src={image} alt="Shoes" className="rounded-xl  w-[320px]" />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
        <div className="flex justify-between mx-4 mb-3">
          <div className="text-[#00D390] bg-[#F1F5E8] py-1 px-1.5 flex rounded-lg gap-2">
            <img className="w-5 h-5" src={Download} alt="" />
            <h1>{downloads}</h1>
          </div>
          <div className="text-[#FF8811] bg-[#FFF0E1] py-1 px-1.5 flex rounded-lg gap-2">
            <img className="w-5 h-5 " src={Rating} alt="" />
            <h1>{ratingAvg}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
