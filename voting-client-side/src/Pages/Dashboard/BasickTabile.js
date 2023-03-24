import React, { useMemo } from "react";
import col from "./columns";

import { useTable } from "react-table/dist/react-table.development";
import fackData from "./MOCK_DATA.json";

const BasickTabile = () => {
  const columns = useMemo(() => col, []);
  const data = useMemo(() => fackData, []);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      className="border-separate border border-slate-500"
      {...getTableProps()}
      // style={{ border: "solid 1px blue" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="border border-slate-600 p-3"
                {...column.getHeaderProps()}
                // style={{
                //   borderBottom: "solid 3px red",
                //   background: "aliceblue",
                //   color: "black",
                //   fontWeight: "bold",
                // }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                  className="border border-slate-700 p-3 "
                  // {...cell.getCellProps()}
                  // style={{
                  //   padding: "10px",
                  //   border: "solid 1px gray",
                  //   background: "papayawhip",
                  // }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasickTabile;
