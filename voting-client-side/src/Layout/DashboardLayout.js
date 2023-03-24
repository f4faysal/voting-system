import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content flex flex-col gap-2">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/dashboard/voters-info"}> Voters Info</Link>
            </li>
            <li>
              <Link to={"/dashboard/add-voter-info"}> Add Voter Info </Link>
            </li>
            <li>
              <Link to={"/dashboard/search-voter-status"}>
                {" "}
                Search Voter Status{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
