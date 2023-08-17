/* eslint-disable prettier/prettier */
import Axios from 'axios';
import {useState, useEffect} from 'react';

const GetData = () => {
  const [Data, setData] = useState([]);
  const url = 'https://api.themoviedb.org/3/genre/movie/list';

  useEffect(() => {
    const api_key = 'c3a64cc75bbef9802227edf7017e0363';
    Axios.get(url, {
      params: {
        api_key: api_key,
      },
    })
      .then(response => {
        setData(response.data.genres);
        console.log(response);
      })
      .catch(err => console.log('error message: ', err));
  }, []);

  return Data;
};

export default GetData;
