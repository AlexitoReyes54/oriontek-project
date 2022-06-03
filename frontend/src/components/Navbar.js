import React from "react";
import { Link } from "react-router-dom";
//import Container from 'react-bootstrap/Container'
//import Navbar from 'react-bootstrap/Navbar'
import Loader from "./Loader";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <Link to="/directions">
          <spam className="navbar-brand" >
            Empresa X
          </spam>
          </Link>
        </div>
      </nav>
    </>
  );
}

/*
<ul classNameName="nav navbar-dark bg-dark">
        
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page">
            <Link to="/directions">Clients directions</Link>
          </a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page">
            <Link to="/clients">
              Clients managemet
            </Link>
          </a>
        </li>
      </ul>
*/
