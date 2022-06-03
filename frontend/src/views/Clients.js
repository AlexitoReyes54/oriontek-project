import React from "react";
import TableList from "../components/TableList";
import { Link } from "react-router-dom";

export default function Clients() {
  return (
    <>
      <div className="container-fluid">
        <br />
        <Link to="/clients/detail/0">
          <button type="button" className="btn btn-dark">
            Add new client
          </button>{" "}
        </Link>
        <br /> <br />
        <TableList />
      </div>
    </>
  );
}
