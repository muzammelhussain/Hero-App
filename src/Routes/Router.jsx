import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
import ErrorPage from "../Pages/Error/ErrorPage";
import ErrorPage2 from "../Pages/Error/ErrorPage2";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appData2.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appData.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appsDetails/:id",
        loader: () => fetch("/appData.json"),
        Component: AppsDetails,
      },

      {
        path: "*",
        Component: ErrorPage2,
      },
    ],
  },
]);
