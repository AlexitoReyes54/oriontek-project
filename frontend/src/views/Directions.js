import React, { useState, useEffect } from "react";
import { useDirectionList } from "../customHooks/useDirectionList";
import { useClientsCrud } from "../customHooks/useClientsCrud";
import ClientModal from "./ClientModal";
import DirectionCard from "../components/DirectionCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Directions() {
  const [createShow, setCreateShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const [client_id, setClient_id] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clients, setClients] = useState([]);
  const [createDirection, setCreateDirection] = useState(true);
  const { directions, handleChange } = useDirectionList(client_id);

  const { requestClients, deleteClient } = useClientsCrud();

  useEffect(() => {
    loadClients();
  }, [client_id]);

  let loadClients = async () => {
    let response = await requestClients();
    setClients(response);
  };

  let selectClient = (client) => {
    setCreateDirection(false);
    setClient_id(client.id);
    setClientName(client.name);
    handleChange();
  };

  let handleDeleteClient = async () => {
    if (window.confirm(`¿Do you want to delete ${clientName}?`)) {
      await deleteClient(client_id);
      setClient_id(0);
      loadClients();
    }
    
  };

  let clearClient = () => {
    setCreateDirection(true);
    setClient_id(0);
    handleChange();
    setClientName("");
  };

  const listDirections = directions.map((direction) => (
    <DirectionCard
      key={direction.id}
      street={direction.street}
      postal_code={direction.postal_code}
      id={direction.id}
    />
  ));

  const clientRecord = clients.map((client, index) => (
    <button
      onClick={() => selectClient(client)}
      style={
        client.id === client_id ? { borderColor: "black", borderWidth: 3 } : {}
      }
      key={index}
      className="list-group-item list-group-item-action list-group-item-dark"
    >
      <FontAwesomeIcon icon={faCircleUser} /> {client.name}
    </button>
  ));

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="col-md-4">
          <h2>Clients </h2>
          <h6>
            User selected:<b> {createDirection ? "" : clientName}</b>
          </h6>
          <div className="overfloBoxClients">
            <div className="list-group">{clientRecord}</div>
          </div>
          <br></br>
        </div>
        <div className="col-md-8 ">
          <button
            onClick={() => clearClient("create")}
            type="button"
            className="btn btn-dark"
            disabled={createDirection}
            hidden={createDirection}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>{" "}
          <button
            onClick={() => {
              createDirection ? setCreateShow(true) : setEditShow(true);
            }}
            type="button"
            className="btn btn-dark"
          >
            <FontAwesomeIcon icon={faEdit} />{" "}
            {createDirection ? "Create new client" : "Edit client"}
          </button>{" "}
          <button
            onClick={() => handleDeleteClient()}
            type="button"
            className="btn btn-dark"
            disabled={createDirection}
            hidden={createDirection}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>{" "}
          <h2 className="top">Directions</h2>
          <div className="overfloBoxDirections">
            {directions.length === 0 ? (
              <center>
                <div class="alert alert-warning" role="alert">
                  Empty
                </div>
              </center>
            ) : (
              listDirections
            )}
          </div>
        </div>
      </div>
      {createShow && (
        <ClientModal
          loadClients={loadClients}
          show={createShow}
          onHide={() => setCreateShow(false)}
          title="Create new client"
        />
      )}
      {editShow && (
        <ClientModal
          client_id={client_id}
          loadClients={loadClients}
          show={editShow}
          onHide={() => setEditShow(false)}
          title="Edit client"
          handleChange={handleChange}
          // directions={directions}
        />
      )}
    </div>
  );
}
