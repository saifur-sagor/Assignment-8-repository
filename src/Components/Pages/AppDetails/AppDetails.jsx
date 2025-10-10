import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../../../assets/icon-downloads.png";
import Rating from "../../../assets/icon-ratings.png";
import review from "../../../assets/icon-review.png";

import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
  const [isInstall, setIsInstall] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();
  const app = data.find((p) => String(p.id) === id);
  const {
    image,
    title,
    downloads,
    description,
    size,
    reviews,
    ratingAvg,
    companyName,
    ratings,
  } = app || {};
  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installApp")) || [];
    const alreadyInstalled = existingList.some((p) => p.id === app?.id);
    setIsInstall(alreadyInstalled);
  }, [app?.id]);

  const handleAddToInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("installApp"));
    let updatedList = [];

    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      if (isDuplicate) return alert("Already Install");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installApp", JSON.stringify(updatedList));
    setIsInstall(true);
    toast(`Yahoo ${title} Reminder Installed Successfully`);
  };

  return (
    <div className="container mx-auto">
      <div className="rounded-2xl flex flex-col md:flex-row items-center gap-50 p-6 md:p-10">
        <div className="bg-white shadow-md ">
          <img
            src={image}
            alt="App Icon"
            className="w-[300px] h-[300px] rounded-3xl p-4"
          />
        </div>

        <div className="">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

          <p className="text-gray-500 text-lg">
            Developed by{" "}
            <span className="text-purple-600 font-medium">{companyName}</span>
          </p>

          <div className="flex flex-wrap items-center gap-8 border-t border-purple-300 pt-4">
            <div>
              <img src={download} className="w-8 h-8 my-2" />
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="text-3xl font-bold text-gray-800">{downloads}</p>
            </div>

            <div className="w-px h-10 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <div>
                <img src={Rating} className="w-8 h-8 my-2" />
                <p className="text-sm text-gray-500">Average Ratings</p>
                <p className="text-3xl font-bold text-gray-800">{ratingAvg}</p>
              </div>
              <span className="text-purple-600 text-3xl"></span>
            </div>

            <div className="w-px h-10 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <div>
                <img src={review} className="w-8 h-8 my-2" />
                <p className="text-sm text-gray-500">Total Reviews</p>
                <p className="text-3xl font-bold text-gray-800">{reviews}</p>
              </div>
              <span className="text-purple-600 text-3xl"></span>
            </div>
          </div>
          <button
            onClick={handleAddToInstall}
            disabled={isInstall}
            className="btn btn-success btn-lg mt-4 text-white text-xl font-bold shadow-md disabled:!bg-[#10d6a9]"
          >
            {isInstall ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      {/* barChart */}
      <div className="w-full md:w-2/3 mx-auto mt-10">
        <h2 className="text-4xl font-bold mb-10">Ratings</h2>
        <ResponsiveContainer width={1000} height={350}>
          <BarChart data={ratings} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#10d6a9" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h1 className="max-sm:px-4 text-3xl font-semibold">Description</h1>
        <p className="max-sm:px-4 text-xl text-gray-500 my-2">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
