import API_KEY from '../../key.js';
import axios from 'axios';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY.key}`;

console.log(API_KEY.key);

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
