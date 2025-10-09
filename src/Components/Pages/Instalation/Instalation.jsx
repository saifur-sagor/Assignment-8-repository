import React, { useEffect, useState } from "react";
import img from "../../../assets/demo-app (2).webp";

const Instalation = () => {
  const [installApp, setInstallApp] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installApp"));
    if (saveList) setInstallApp(saveList);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-10 border-b-2 border-gray-400">
        <h1>{installApp.length} Apps Found</h1>
        <button className=" mb-8">Sort</button>
      </div>
      {installApp.map((p) => (
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
          <button className="btn btn-success btn-lg mt-4 text-white text-xl font-bold shadow-md">
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
};

export default Instalation;
