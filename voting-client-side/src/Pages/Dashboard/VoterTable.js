import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./voterscss.css";
const VoterTable = ({ voter }) => {
  return (
    <tr>
      <th className="border border-slate-300 ">{voter.voter_id}</th>
      <td className="border border-slate-300 page">
        {voter.first_name} <span className="fold"></span>
      </td>
      <td className="border border-slate-300">{voter.address}</td>
      <td className="border border-slate-300">{voter.det_of_barth}</td>
      <td className="border border-slate-300">{voter._id}</td>
      <td className="border border-slate-300">{voter.gender}</td>

      {voter.viter_status ? (
        <>
          <td className="border border-slate-300 bg-green-500 text-white">
            {" "}
            Yes{" "}
          </td>
        </>
      ) : (
        <>
          <td className="border border-slate-300 bg-red-500 text-white">
            {" "}
            No{" "}
          </td>
        </>
      )}

      <td className="p-0 text-center  ">
        <button className="btn btn-ghost">
          <TrashIcon className="h-6 w-6 text-blue-500" />
        </button>
      </td>
    </tr>
  );
};

export default VoterTable;
