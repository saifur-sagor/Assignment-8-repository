import React from "react";
import { MdErrorOutline } from "react-icons/md";
import err from "../../../assets/error-404.png";
import { Link } from "react-router";

const RoutesError = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <MdErrorOutline className="w-[150px] h-[150px] text-center text-red-500" />
      </div>
      <div className="flex justify-center">
        <img src={err} className="w-[300px] h-[300px]" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold my-2">Oops Page Not Found</h1>
        <p className="text-xl text-gray-500 mb-2">
          Sorry, the page you are looking for might be removed,
          <br />
          renamed, or is temporarily unavailable.
        </p>
      </div>
      <div>
        <Link to="/" className="btn mr-5 bg-blue-950 text-white">
          Back to Home
        </Link>
        <Link to="/apps" className="btn hover:bg-purple-600 hover:text-white ">
          Browse App
        </Link>
      </div>
    </div>
  );
};

export default RoutesError;
