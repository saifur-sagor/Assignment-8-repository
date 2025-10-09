import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
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
  } = app || {};

  const handleAddToInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("installApp"));
    let updatedList = [];
    if (handleAddToInstall) {
      alert("Yahoo!Installed");
    }
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      if (isDuplicate) return alert("already added");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installApp", JSON.stringify(updatedList));
  };

  return (
    <div className="">
      <div class="rounded-2xl flex flex-col md:flex-row items-center gap-50 p-6 md:p-10">
        <div class="bg-white shadow-md ">
          <img
            src={image}
            alt="App Icon"
            class="w-[300px] h-[300px] rounded-3xl   p-4"
          />
        </div>

        <div class="">
          <h2 class="text-3xl font-bold text-gray-800">{title}</h2>

          <p class="text-gray-500 text-lg">
            Developed by{" "}
            <span class="text-purple-600 font-medium">{companyName}</span>
          </p>

          <div class="flex flex-wrap items-center gap-8 border-t border-purple-300 pt-4">
            <div>
              <p class="text-sm text-gray-500">Downloads</p>
              <p class="text-3xl font-bold text-gray-800">{downloads}</p>
            </div>

            <div class="w-px h-10 bg-gray-300"></div>

            <div class="flex items-center gap-2">
              <div>
                <p class="text-sm text-gray-500">Average Ratings</p>
                <p class="text-3xl font-bold text-gray-800">{ratingAvg}</p>
              </div>
              <span class="text-purple-600 text-3xl"></span>
            </div>

            <div class="w-px h-10 bg-gray-300"></div>

            <div class="flex items-center gap-2">
              <div>
                <p class="text-sm text-gray-500">Total Reviews</p>
                <p class="text-3xl font-bold text-gray-800">{reviews}</p>
              </div>
              <span class="text-purple-600 text-3xl"></span>
            </div>
          </div>
          <button
            onClick={handleAddToInstall}
            className="btn btn-success btn-lg mt-4 text-white text-xl font-bold shadow-md"
          >
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl">Description</h1>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
