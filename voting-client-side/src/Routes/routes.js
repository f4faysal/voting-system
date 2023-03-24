import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddVoterInfo from "../Pages/Dashboard/AddVoterInfo";
import SearchVoterStatus from "../Pages/Dashboard/SearchVoterStatus";
import VotersInfo from "../Pages/Dashboard/VotersInfo";

import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <Home></Home>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/voters-info",
        element: <VotersInfo/>
      },
      {
        path : "/dashboard/add-voter-info",
        element : <AddVoterInfo/>
      },
      {
        path : "/dashboard/search-voter-status",
        element : <SearchVoterStatus/>
      }
    ],
  },
]);

export default router;
