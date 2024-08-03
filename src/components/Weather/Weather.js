
import { Search, MapPin, Wind } from "react-feather";
import getWeather from "./getWeather";
import { useState } from "react";
// import dateFormat from "dateformat";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherbyCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  };

 

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
        />
        <button
          style={{ background: "#7406a4" }}
          onClick={() => getWeatherbyCity()}
        >
          <Search></Search>
        </button>
      </div>

      {weather && weather.weather && (
        <div className="content">
          <div className="location d-flex">
            <MapPin></MapPin>
            <h2>
              {weather.name} <span>({weather.sys.country})</span>
            </h2>
          </div>
          

          <div className="weatherdesc d-flex flex-c">
            
          </div>

          <div className="tempstats d-flex flex-c">
            <h1>
              {weather.main.temp} <span>&deg;C</span>
            </h1>
            <h3>
              Feels Like {weather.main.feels_like} <span>&deg;C</span>
            </h3>
          </div>

          <div className="windstats d-flex">
            <Wind></Wind>
            <h3>
              Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;
            </h3>
          </div>
        </div>
      )}
      {!weather.weather && (
        <div className="content">
          <h4>No Data found !</h4>
        </div>
      )}
    </div>
  );
}

export default Weather




// import React, { useState } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [location, setLocation] = useState('');
//   const [weather, setWeather] = useState(null);

//   const fetchWeather = async (location) => {
//     const response = await axios.get(`/weather/${location}`);
//     setWeather(response.data);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeather(location);
//   };

//   return (
//     <div>
//       <h2>Weather Information</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Location:</label>
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
//         <button type="submit">Fetch Weather</button>
//       </form>
//       {weather && (
//         <div>
//           <h3>Weather in {location}</h3>
//           <p>Temperature: {weather.temperature}</p>
//           <p>Description: {weather.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;
