import React, { Children, Component } from "react";
import { createBrowserRouter } from "react-router";
import Navbar from "../Navbar/Navbar";
import Root from "../Root/Root";
import Banner from "../Pages/Banner/Banner";
import Apps from "../Pages/Apps/Apps";
import Home from "../Pages/Home/Home";
import HomePage from "../Pages/HomePage/HomePage";
import RoutesError from "../Pages/ErrorPages/RoutesError";
import AppError from "../Pages/ErrorPages/AppError";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <RoutesError></RoutesError>,
    children: [
      {
        index: true,
        path: "/",
        Component: HomePage,
      },
      {
        path: "/apps",
        Component: Apps,
        errorElement: <AppError></AppError>,
      },
    ],
  },
]);

export default router;
