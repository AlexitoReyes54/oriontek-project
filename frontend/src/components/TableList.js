import React from "react";  
import { useClientRows } from "../customHooks/useClientRows";

export default function TableList() {

  const clientRows = useClientRows()

  return (
    <>
    
      <table  className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col" colspan="2">
              <center> Options</center>
            </th>
          </tr>
        </thead>
        <tbody>
          {clientRows}
        </tbody>
      </table>
      </>
  );
}
