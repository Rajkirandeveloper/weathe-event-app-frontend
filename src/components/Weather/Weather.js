import React, { useState } from 'react';
import { Search, MapPin, Wind } from 'react-feather';
import getWeather from './getWeather';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const getWeatherbyCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity('');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Weather App</h1>
      <div className="d-flex justify-content-center mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name"
          />
          <button
            className="btn btn-primary"
            onClick={() => getWeatherbyCity()}
          >
            <Search />
          </button>
        </div>
      </div>

      {weather && weather.weather ? (
        <div className="card p-4">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <MapPin size={24} />
              <h2 className="ms-2">
                {weather.name} <small className="text-muted">({weather.sys.country})</small>
              </h2>
            </div>

            <div className="d-flex flex-column align-items-center mb-3">
              <h1 className="display-4">
                {weather.main.temp} <span>&deg;C</span>
              </h1>
              <h3>
                Feels Like {weather.main.feels_like} <span>&deg;C</span>
              </h3>
            </div>

            <div className="d-flex align-items-center">
              <Wind size={24} />
              <h3 className="ms-2">
                Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-4">
          <h4>No Data found!</h4>
        </div>
      )}
    </div>
  );
}

export default Weather;
