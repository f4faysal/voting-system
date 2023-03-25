import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Components/Button/PrimaryButton";
const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-100 ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className=" flex justify-evenly w-1/2">
          <div
            className="radial-progress bg-green-100 text-green-600"
            style={{
              "--value": "60",
              "--size": "12rem",
              "--thickness": "10px",
            }}
          >
            Total casting 200
          </div>

          <div
            className="radial-progress bg-red-100 text-red-800 "
            style={{
              "--value": "40",
              "--size": "12rem",
              "--thickness": "13px",
            }}
          >
            Owing Vote 40%
          </div>

          <div
            className="radial-progress bg-green-100 text-green-600"
            style={{
              "--value": "60",
              "--size": "12rem",
              "--thickness": "15px",
            }}
          >
            Total Vote 60%
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="text-5xl font-bold w-full ">Voting System</h1>
          <p className="py-6 ">
            {`The total 400 registered voters 2023. Custom voter identification and checking the presence of all Bangladeshi votes in Italy`}
          </p>

          <PrimaryButton classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
            <Link to={"/dashboard/search-voter-status"}>
              Search Voter Status{" "}
            </Link>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
