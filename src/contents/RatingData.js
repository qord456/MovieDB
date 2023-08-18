import Axios from "axios";
import { useState, useEffect } from "react";

const GetRating = (url) => {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    const api_key = "c3a64cc75bbef9802227edf7017e0363";
    Axios.get(url, {
      params: {
        api_key: api_key
      }
    })
      .then((response) => {
        setRating(response.data);
      })
      .catch((err) => console.log("error message: ", err));
  });

  return rating;
};

export default GetRating;
