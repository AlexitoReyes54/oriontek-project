import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDirectionCrud } from "../customHooks/useDirectionCrud";

export default function DirectionDetail() {
  const [street, setStreet] = useState("");
  const [postal_code, setPostal_code] = useState(0);
  const [create, setCreate] = useState(false);
  let { id, client_id } = useParams();
  let navigate = useNavigate();
  let { createDirection, requestDirectionById, updateDirection } =
    useDirectionCrud();

  useEffect(() => {
    verifyId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let verifyId = async () => {
    if (id !== 0) {
      let directionObj = await requestDirectionById(id);
      setStreet(directionObj.street);
      setPostal_code(directionObj.postal_code);
      setCreate(false);
    } else {
      setCreate(true);
    }
  };

  let handlecreateDirection = async () => {
    if (await createDirection({ street, postal_code, client_id })) {
      navigate("../directions", { replace: true });
    }
  };

  let handleupdateDirection = async (directionObj) => {
    if (await updateDirection(directionObj)) {
      navigate("../directions", { replace: true });
    }
  };

  let handleBtn = () => {
    if (create && validateForm()) {
      handlecreateDirection();
    } else {
      handleupdateDirection({ id, client_id, street, postal_code });
    }
  };

  let validateForm = () => {
    if (street !== "" && postal_code !== 0) {
      return true;
    } else {
      alert("Campos incompletos");
    }
  };

  return (
    <div>
      <label>Street: </label>{" "}
      <input
        maxLength="25"
        value={street}
        onChange={(event) => setStreet(event.currentTarget.value)}
        type="text"
      />
      <label>Postal code : </label>{" "}
      <input
        max={999}
        maxLength={3}
        value={postal_code}
        onChange={(event) => setPostal_code(event.currentTarget.value)}
        type="number"
      />
      <button
        onClick={() => handleBtn()}
        type="button"
        className="btn btn-primary"
      >
        Send
      </button>
    </div>
  );
}
