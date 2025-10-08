import React from "react";
import PlayStore from "../../assets/img/Group(1).png";
import AppStore from "../../assets/img/Group.png";
const Banner = () => {
  return (
    <div className="mt-20">
      <div className="w-full md:w-[597px] mx-auto">
        <h1 className="text-[64px] text-center text-[#001931] font-bold">
          We Build{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
      </div>
      <div className="w-full md:w-2xl mx-auto">
        <p className="text-[#627382] px-4 md:px-0">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="w-full md:w-2xl text-center mx-auto space-x-5 my-8">
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <img className="w-5" src={AppStore} alt="" /> Google Play
        </button>
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <img className="w-5" src={PlayStore} alt="" /> App Store
        </button>
      </div>
    </div>
  );
};

export default Banner;
