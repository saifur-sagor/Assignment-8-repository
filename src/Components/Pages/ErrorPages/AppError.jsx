import React from "react";
import err from "../../../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="my-10">
      <h1 className="text-6xl font-bold text-center my-5">No Apps Found</h1>
      <div className="flex justify-center">
        <img src={err} className="w-[300px] h-[300px " />
      </div>
      <div className="flex justify-center my-2">
        <Link
          to="/"
          className="text-2xl font-semibold btn bg-purple-700 hover:bg-purple-600 py-5 px-7 text-white"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AppError;
