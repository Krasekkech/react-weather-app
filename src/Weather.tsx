import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from 'lodash';
import { fetchWeather } from './services/WeatherService';
import { fetchCities } from './services/CityServices.ts';
import Input from './components/Input';
import './Waether.css';

// eslint-disable-next-line react/function-component-definition
const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [cities, setCities] = useState<
    {
      name: string;
      latitude: number;
      longitude: number;
      country: string;
      region: string;
      id: number;
    }[]
  >([]);

  useEffect(() => {
    if (city) {
      const debouncedFetchCities = debounce(async () => {
        const result = await fetchCities(city);
        // console.log(cities);
        setCities(result);
      }, 500);
      debouncedFetchCities();
    } else {
      setCities([]);
    }
  }, [city]);

  const { data, error, isLoading } = useQuery(
    ['weather', selectedCity],
    () => fetchWeather(selectedCity!.lat, selectedCity!.lon),
    {
      enabled: !!selectedCity,
    }
  );

  const handleSearch = (lat: number, lon: number) => {
    setSelectedCity({ lat, lon });
  };

  return (
    <div>
      <Input value={city} onChange={(e) => setCity(e.target.value)} />
      {cities.length > 0 && (
        <ul>
          {/* eslint-disable-next-line no-shadow */}
          {cities.map((city) => (
            <li
              key={city.name}
              onClick={() => handleSearch(city.latitude, city.longitude)}
            >
              {city.name},{city.region}, {city.country}
            </li>
          ))}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
