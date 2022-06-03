import React, { useEffect, useState } from "react";
import TableItem from "../components/TableItem";
import { useClientsCrud } from "./useClientsCrud";

export const useClientRows = () => {
  const [clients, setClients] = useState([]);
  const [observer, setObserver] = useState(0);
  let { requestClients } = useClientsCrud();

  useEffect(() => {
    setData();
  }, [observer]);

  let setData = async () => {
    let clients = await requestClients();
    setClients(clients);
  };

  let handleChange = () => {
    setObserver((observer) => observer + 1);
  };

  const clientRows = clients.map((client,index) => (
    <TableItem
      key={index}
      name={client.name}
      id={client.id}
      handleChange={handleChange}
    ></TableItem>
  ));

  return clientRows;
};
