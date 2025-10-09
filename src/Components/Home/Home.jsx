import React, { Suspense } from "react";
import useHooks from "../Hook/useHooks.js";
import AppCard from "../AppCard/AppCard.jsx";
import { Link } from "react-router";

const Home = () => {
  const { appsData } = useHooks();
  // console.log(appsData);
  const sliceApp = appsData.slice(0, 8);
  return (
    <div className="container mx-auto">
      <div className=" text-center my-10">
        <h1 className="font-bold text-4xl">Trending Apps</h1>
        <p className="text-xl text-gray-500 my-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Suspense fallback={<p>Loading..</p>}>
          {sliceApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </Suspense>
      </div>
      <div className="text-center my-10">
        <Link
          to="/apps"
          className="text-2xl font-semibold btn bg-purple-700 hover:bg-purple-600 py-5 px-7 text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
