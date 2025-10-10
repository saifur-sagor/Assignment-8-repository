import React from "react";
import { Link } from "react-router";
import download from "../../assets/icon-downloads.png";
import { FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="bg-white shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg focus:outline-none">
        <div className="p-4">
          <img
            src={image}
            className="flex justify-center h-[250px] mx-auto rounded-2xl"
          />
          <h1 className="text-2xl">{title}</h1>
          <div className="flex justify-between my-2">
            <div className="flex items-center rounded-lg px-3 py-[2px] gap-1 text-green-600 bg-gray-300">
              <img src={download} className="h-4 w-4" />
              <button>{downloads}</button>
            </div>
            <button className="flex items-center gap-1 text-blue-900 bg-blue-100 px-3 py-[2px] rounded-lg">
              <FaStar />
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
