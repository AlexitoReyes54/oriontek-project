import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useClientsCrud } from "../customHooks/useClientsCrud";

export default function ClientsDetails() {
  const [name, setName] = useState("");
  const [create, setCreate] = useState(false);
  let { createClient, requestClientById, updateClient } = useClientsCrud();
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    verifyId();
  }, []);

  let verifyId = async () => {
    if (id != 0) {
      let clientObj = await requestClientById(id);
      setName(clientObj.name);
      setCreate(false);
    } else {
      setCreate(true);
    }
  };

  let handlecreateClient = async () => {
    if (await createClient(name)) {
      setName("");
      navigate("../clients", { replace: true });
    }
  };

  let handleupdateClient = async (clientObj) => {
    if (await updateClient(clientObj)) {
      setName("");
      navigate("../clients", { replace: true });
    }
  };

  let handleBtn = () => {
    if (create && validateForm()) {
      handlecreateClient();
    } else {
      handleupdateClient({ id, name });
    }
  };

  let validateForm = () => {
    if (name !== "") {
      return true;
    } else {
      alert("Campos incompletos");
    }
  };

  return (
    <>
      <label>Name: </label>{" "}
      <input
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        type="text"
      />
      <button
        onClick={() => handleBtn()}
        type="button"
        className="btn btn-primary"
      >
        Send
      </button>
    </>
  );
}
