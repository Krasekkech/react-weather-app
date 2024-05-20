import axios from 'axios';

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

// eslint-disable-next-line import/prefer-default-export
export const fetchCities = async (query: string) => {
  const response = await axios.get(`${url}/cities`, {
    params: { namePrefix: query, limit: 10 },
    headers: {
      'X-RapidAPI-Key': '6c6ee738cfmshc4d222ba48c763ap1cd22cjsne8c6bf57f4fe',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  });
  return response.data.data;
};
