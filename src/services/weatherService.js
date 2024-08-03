import axios from 'axios';

export const fetchWeather = (location) => axios.get(`/weather/${location}`);
