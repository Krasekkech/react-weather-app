import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';

// eslint-disable-next-line import/prefer-default-export
export const fetchWeather = async (lat: number, lon: number) => {
  const response = await axios.get(url, {
    params: {
      lat,
      lon,
      appid: '1a50ac9db2f372ffb91fb308e68bbcb9',
      units: 'metric',
    },
  });
  return response.data;
};
