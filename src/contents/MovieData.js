import Axios from 'axios';
import { useState, useEffect } from 'react';

 const MovieData = () => {
    const [data, setData] = useState([]);
    const urlMovie = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc'
    useEffect(() => {
      const api_key = 'c3a64cc75bbef9802227edf7017e0363';
      Axios.get(urlMovie, {
        params: {
          api_key: api_key,
        },
      })
        .then(response => {
          setData(response.data.results);
        })
        .catch(err => console.log('error message: ', err));
    }, []);
  
    return data;
  };
  
  export default MovieData;
