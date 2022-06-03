import configApp from "../config/config";
export const useClientsCrud = () => {
  let requestClients = async () => {
    let response = await fetch(`${configApp.baseUrl}/client`, {
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    let result = await response.json();
    return result;
  };

  let deleteClient = async (id) => {
    let response = await fetch(`${configApp.baseUrl}/client/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    let result = await response.json();
    return result;
  };

  let createClient = async (name) => {
    let response = await fetch(`${configApp.baseUrl}/client`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ name }),
    });

    let result = await response.json();
    return JSON.parse(result);
  };

  let requestClientById = async (id) => {
    let response = await fetch(`${configApp.baseUrl}/client/${id}`, {
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });

    let result = await response.json();
    return result[0];
  };

  let updateClient = async (clientObj) => {
    let response = await fetch("http://localhost:4000/client/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(clientObj),
    });

    let result = await response.json();
    if (result.status == "client updated") {
      return true;
    }
  };
  return {
    requestClients,
    deleteClient,
    createClient,
    requestClientById,
    updateClient,
  };
};
