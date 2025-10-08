import React from "react";
import Banner from "../../Components/Banner/Banner";
import UserReview from "../../Components/Banner/UserReview";
import { Link, useLoaderData } from "react-router";
import HomeCards from "./HomeCards";

const Home = () => {
  const appData = useLoaderData();

  return (
    <div className="bg-[#F5F5F5] ">
      <div className="bg-[#F5F5F5] w-3/4 mx-auto ">
        <Banner></Banner>
        <UserReview></UserReview>
        <HomeCards appData={appData}></HomeCards>
        <div className="text-center">
          <Link to="/apps">
            <button className="btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
