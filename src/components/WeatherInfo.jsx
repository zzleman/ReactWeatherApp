import React from 'react';
import '../styles/weatherInfo.css';
import googlesImg from '../images/goggles.png';
import humidityImg from '../images/humidity.png';
import uvIndexImg from '../images/uv-index.png';
import windImg from '../images/wind.png';

export default function WeatherInfo ({ weatherData }){
  const {
    location: { name, country },
    current: {
      condition: { text, icon },
      temp_c,
      feelslike_c,
      wind_kph,
      humidity,
      uv,
      vis_km,
    },
  } = weatherData;

  return (
    <div className="weather-info-container">
      <div className="left-info">
      <p className="city-country">
          {name}, {country}
        </p>
        <p className="condition">{text}</p>
        <img src={`https:${icon}`} alt={text} className="weather-icon" />
        <h2 className="temperature">{temp_c}°C</h2>
        <p className="feels-like">Feels Like {feelslike_c}°C</p>
      </div>
      <div className="right-info">
        <p className="local-time">Local Time: {new Date().toLocaleTimeString()}</p>
        <div className="weather-info">
          <div className="wind-speed">
            <img className='speed-img' src={windImg} alt="Wind Speed" />
            <p className='speed-text'>Speed</p>
            <p className='speed'>{wind_kph}</p>
            <p className='kmH'>km/h</p>
          </div>
          <div className="humidity">
            <img className='humidity-img' src={humidityImg} alt="Humidity" />
            <p className='humidity-text'>Humidity</p>
            <p className='humidityP'>{humidity}</p>
            <p className='percent'>%</p>
          </div>
          <div className="uv-index">
            <img className='uvIndex-img' src={uvIndexImg} alt="UV Index" />
            <p className='uvIndex-text'>UV Index</p>
            <p className='uvIndexP'>{uv}</p>
          </div>
          <div className="visibility">
            <img className='vis-img' src={googlesImg} alt="Visibility" />
            <p className='vis-text'>Visibility</p>
            <p className='visP'>{vis_km}</p>
            <p className='SeenKm'>Km</p>
          </div>
        </div>
      </div>
    </div>
  );
};
