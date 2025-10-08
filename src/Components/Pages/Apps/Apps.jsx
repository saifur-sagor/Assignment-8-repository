import React, { Suspense } from "react";
import useHooks from "../../Hook/useHooks";
import AppCard from "../../AppCard/AppCard";

const Apps = () => {
  const { appsData } = useHooks();

  return (
    <div className="container mx-auto">
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center my-10">
        <h1>(30)Apps found</h1>
        <label>
          <input type="search" placeholder="search" className="input" />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <Suspense fallback={<p>Loading...</p>}>
          {appsData.map((app) => (
            <AppCard key={app} app={app}></AppCard>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Apps;
