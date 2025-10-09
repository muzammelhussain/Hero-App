import React from "react";
import Hero from "../../assets/img/hero.png";
const UserReview = () => {
  return (
    <div>
      <div>
        <img className="max-w[500px] mx-auto " src={Hero} alt="" />
      </div>
      <div className="text-white p-16 bg-gradient-to-b from-[#632EE3] to-[#9F62F2]">
        <div className="w-2/3 mx-auto">
          <h1 className="text-center text-[32px] font-bold mb-3">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col md:flex-row justify-around text-center ">
            <div>
              <p>Total Downloads</p>
              <h1 className="text-[48px] font-bold">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div>
              <p>Total Reviews</p>
              <h1 className="text-[48px] font-bold">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <h1 className="text-[48px] font-bold">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
