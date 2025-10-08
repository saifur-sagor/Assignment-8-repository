import React from "react";
import banner from "../../../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className=" text-center">
        <h1 className="font-bold text-7xl">
          We Build <br /> <span className="text-purple-600">Productive </span>
          Apps
        </h1>
        <p className="font-normal text-xl text-gray-500 my-5">
          At HERO.IO,we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div>
        <div className="text-center my-5">
          <button className="btn text-xl p-5 mr-3">
            <FaGooglePlay />
            Google Play
          </button>
          <button className="btn text-xl p-5">
            <FaAppStore />
            App Store
          </button>
        </div>
        <div className=" flex justify-center">
          <img src={banner} />
        </div>
      </div>
      <div className="h-[260px] bg-purple-600 text-white">
        <h1 className="text-4xl font-bold text-center py-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex justify-center items-center gap-24">
          <div className="flex flex-col justify-center items-center">
            <p>Total Download</p>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <p>21% more than Last month</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Total Review</p>
            <h1 className="text-4xl font-bold">906K</h1>
            <p>46% more than Last month</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Actives Apps</p>
            <h1 className="text-4xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
