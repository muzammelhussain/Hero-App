import React from "react";
import NotFound from "../../assets/img/App-Error.png";
import { Link } from "react-router";

const ErrorPage2 = () => {
  return (
    <div className="text-center">
      <img className="max-[500px] mx-auto my-6" src={NotFound} alt="" />
      <h1 className="text-3xl font-bold text-[#001931]">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[#627382] my-4">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link to="/apps">
        <button className="btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage2;
