import React, { useEffect, useState } from "react";

const Instalation = () => {
  const [installApp, setInstallApp] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installApp"));
    if (saveList) setInstallApp(saveList);
  }, []);
  const [sortOrder, setSortOrder] = useState("none");
  const sortedItem = () => {
    if (sortOrder === "size-asc") {
      return [...installApp].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installApp].sort((a, b) => b.size - a.size);
    }
    return installApp;
  };
  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installApp"));
    let updatedList = existingList.filter((p) => p.id !== id);
    setInstallApp(updatedList);
    localStorage.setItem("installApp", JSON.stringify(updatedList));
  };
  return (
    <div className="container mx-auto">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text xl text-gray-600 my-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between my-10 border-b-2 border-gray-400">
        <h1>{installApp.length} Apps Found</h1>
        <label className="mb-8">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className="select"
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low-High</option>
            <option value="size-desc">High-Low</option>
          </select>
        </label>
      </div>
      {sortedItem().map((p) => (
        <div className="flex justify-between bg-white rounded-2xl p-4 my-5">
          <div className="flex justify-center items-center gap-5">
            <div>
              <img src={p.image} className="w-20 h-20 rounded-2xl" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{p.title}</h1>
              <button className="mr-4">{p.downloads}</button>
              <button className="mr-4">{p.ratingAvg}</button>
              <button className="mr-4">{p.size}</button>
            </div>
          </div>
          <button
            onClick={() => handleRemove(p.id)}
            className="btn btn-success btn-lg mt-4 text-white text-xl font-bold shadow-md"
          >
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
};

export default Instalation;
