import configApp from "../config/config";
export const useDirectionCrud = () => {
  let requestDirections = async () => {
    let response = await fetch("http://localhost:4000/direction", {
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    let result = await response.json();
    return result;
  };

  let requestDirectionsByClientId = async (client_id) => {
    let response = await fetch(
      `${configApp.baseUrl}/direction/client/${client_id}`,
      {
        headers: { "Content-Type": "application/json;charset=utf-8" },
      }
    );

    let result = await response.json();
    return result;
  };

  let createDirection = async (directionObj) => {
    let response = await fetch(`${configApp.baseUrl}/direction`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(directionObj),
    });

    let result = await response.json();
    console.log(result);
    if (result.status == "direction created") {
      return true;
    }
  };

  let requestDirectionById = async (id) => {
    let response = await fetch(`${configApp.baseUrl}/direction/${id}`, {
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    let result = await response.json();
    return result[0];
  };

  let updateDirection = async (directionObj) => {
    let response = await fetch(`${configApp.baseUrl}/direction/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(directionObj),
    });

    let result = await response.json();
    if (result.status == "direction updated") {
      return true;
    }
  };

  let deleteDirection = async (id) => {
    let response = await fetch(`${configApp.baseUrl}/direction/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    let result = await response.json();
    if (result.status == "direction deleted") {
      return true;
    }
  };

  let deleteClientDirections = async (client_id) => {
    let response = await fetch(`${configApp.baseUrl}/direction/all/${client_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    let result = await response.json();
    if (result.status == "direction deleted") {
      return true;
    }
  };

  return {
    requestDirections,
    createDirection,
    requestDirectionById,
    updateDirection,
    requestDirectionsByClientId,
    deleteDirection,
    deleteClientDirections
  };
};
