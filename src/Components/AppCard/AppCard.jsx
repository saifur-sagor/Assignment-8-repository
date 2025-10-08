import React from "react";
import { Link } from "react-router";
import download from "../../assets/icon-downloads.png";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads } = app;
  return (
    <div className="bg-white shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg focus:outline-none">
      <div className="p-4">
        <img src={image} className="h-[200px] rounded-2xl" />
        <h1 className="text-2xl">{title}</h1>
        <div className="flex justify-between">
          <div className="flex items-center rounded-lg py-[2px] px-2 gap-1 text-green-600 bg-gray-300">
            <img src={download} className="h-4 w-4" />
            <button>{downloads}</button>
          </div>
          <button>{ratingAvg}</button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
