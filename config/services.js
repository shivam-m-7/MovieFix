import axios from 'axios';
import { URL, API_KEY } from './const';
export const fetchMovies = async (search) => {
  console.log('fetch movies', search);
  if (!search) {
    const response = await axios.get(`${URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100`);
    return [...response.data.results];
  } else {
    console.log('in else');
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
    );
    return [...response.data.results];
  }
};

