import axios from 'axios';
import config from './config';

const {
  REACT_APP_MARVEL_SERVICE_ENDPOINT,
  REACT_APP_MARVEL_API_KEY,
} = config;

const endpoint = REACT_APP_MARVEL_SERVICE_ENDPOINT;

const apiRoutes = {
  characters: 'characters',
};

const params = {
  apikey: REACT_APP_MARVEL_API_KEY,
};

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'Accept': '*/*',
};

const instance = axios.create({
  baseURL: endpoint,
  headers,
});

const getHeroes = async () => await instance.get(apiRoutes.characters, { params });
const getHero = async (id) => await instance.get(apiRoutes.characters`/${id}`, { params });

export {
  getHero,
  getHeroes,
};
