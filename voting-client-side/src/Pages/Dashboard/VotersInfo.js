import React, { useEffect, useState } from "react";
import DashbordNavbar from "../../Components/DashbordNavbar";

const VotersInfo = () => {
  // const { data: voters = [] , refetch , isLoading} = useQuery({
  //   queryKey: ['voters'],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/voters`).then((res) =>
  //       res.json()
  //     ),
  // });

  // const [apiData, setApiData] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/voters");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <DashbordNavbar></DashbordNavbar>

      <div className="overflow-x-auto">
        <table className="table w-full table-auto border-collapse border border-slate-400">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Addresh</th>
              <th>Barth</th>
              <th>voter_id</th>
              <th>gender</th>
              <th>viter_status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((voter) => (
              <tr>
                <th>{voter.voter_id}</th>
                <td>{voter.first_name}</td>
                <td>{voter.address}</td>
                <td>{voter.det_of_barth}</td>
                <td>{voter._id}</td>
                <td>{voter.gender}</td>
                <td>{voter.viter_status ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Addresh</th>
              <th>Barth</th>
              <th>voter_id</th>
              <th>gender</th>
              <th>viter_status</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default VotersInfo;
