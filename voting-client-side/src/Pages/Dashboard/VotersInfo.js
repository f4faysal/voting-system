import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashbordNavbar from "../../Components/DashbordNavbar";
import VoterTable from "./VoterTable";

const VotersInfo = () => {


  const { data: voters = [] , refetch , isLoading} = useQuery({
    queryKey: ['voters'],
    queryFn: () =>
      fetch(`http://localhost:5000/voters`).then((res) =>
        res.json()
      ),
  });

  // const [apiData, setApiData] = useState([]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:5000/voters");
  //     const json = await response.json();
  //     setData(json);
  //   }
  //   fetchData();
  // }, []);

  // console.log(data);

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
            {voters.map((voter , i ) => (
              <VoterTable voter={voter} key={i} ></VoterTable>
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
