import React from "react";
import err from "../../../assets/App-Error.png";

const AppError = () => {
  return (
    <div className="my-10">
      <h1 className="text-6xl font-bold text-center my-5">No Apps Found</h1>
      <div className="flex justify-center">
        <img src={err} className="w-[300px] h-[300px " />
      </div>
    </div>
  );
};

export default AppError;
