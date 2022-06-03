import DirectionCard from "../components/DirectionCard";
import { useDirectionCrud } from "./useDirectionCrud";
import React, { useState, useEffect } from "react";

export const useDirectionList = (client_id) => {
  const [directions, setDirections] = useState([]);
  const [observer, setObserver] = useState(0);
  const { requestDirectionsByClientId } = useDirectionCrud();

  useEffect(() => {
    setData();
  }, [observer]);

  let setData = async () => {
    let directionsResponse = await requestDirectionsByClientId(client_id);
    if (directionsResponse.length > 0) {
      setDirections(directionsResponse);
    } else {
      setDirections([]);
    }
  };

  let handleChange = () => {
    setObserver((observer) => observer + 1);
  };

  

  return { directions,handleChange};
};
