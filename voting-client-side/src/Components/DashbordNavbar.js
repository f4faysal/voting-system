import React from "react";
import { Link } from "react-router-dom";

const DashbordNavbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <Link to={"/"} className="btn btn-ghost ">
          Go-Home
        </Link>
      </div>
    </div>
  );
};

export default DashbordNavbar;
