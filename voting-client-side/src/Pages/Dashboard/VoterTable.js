import React from "react";

const VoterTable = ({ voter }) => {
  return (
    <tr>
      <th className="border border-slate-300">{voter.voter_id}</th>
      <td className="border border-slate-300">{voter.first_name}</td>
      <td className="border border-slate-300">{voter.address}</td>
      <td className="border border-slate-300">{voter.det_of_barth}</td>
      <td className="border border-slate-300">{voter._id}</td>
      <td className="border border-slate-300">{voter.gender}</td>
      <td className="border border-slate-300">{voter.viter_status ? "Yes" : "No"}</td>
    </tr>
  );
};

export default VoterTable;
