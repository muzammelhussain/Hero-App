import React from "react";
import Banner from "../../Components/Banner/Banner";
import UserReview from "../../Components/Banner/UserReview";
import { Link, useLoaderData } from "react-router";
import HomeCards from "./HomeCards";
import UseLoader from "../../Components/UseLoader/UseLoader";
import Spinner from "../../Components/Spinner/Spinner";

const Home = () => {
  const appData = useLoaderData();

  const loading = UseLoader(2000);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="bg-[#F5F5F5] ">
      <div className="bg-[#F5F5F5] w-full mx-auto ">
        <Banner></Banner>
        <UserReview></UserReview>
        <HomeCards appData={appData}></HomeCards>
        <div className="text-center pb-24">
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
