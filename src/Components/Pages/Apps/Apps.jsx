import React, { Suspense, useState } from "react";
import useHooks from "../../Hook/useHooks";
import AppCard from "../../AppCard/AppCard";
import AppError from "../ErrorPages/AppError";

const Apps = () => {
  const { appsData } = useHooks();
  const [search, setSearch] = useState("");
  const trim = search.trim().toLocaleLowerCase();
  const searchApp = trim
    ? appsData.filter((app) => app.title.toLocaleLowerCase().includes(trim))
    : appsData;
  if (searchApp.length === 0) {
    return (
      <div>
        <AppError></AppError>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center my-10">
        <h1>
          <span>({searchApp.length}) </span>Apps found
        </h1>
        <label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
            className="input"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        <Suspense
          fallback={
            <span className="loading loading-spinner text-error"></span>
          }
        >
          {searchApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Apps;
