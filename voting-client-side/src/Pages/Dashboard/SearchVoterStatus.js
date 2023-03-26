import React from "react";
import DashbordNavbar from "../../Components/DashbordNavbar";

const SearchVoterStatus = () => {
  return (
    <div>
      <DashbordNavbar></DashbordNavbar>
      <div className="h-3"></div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default SearchVoterStatus;
