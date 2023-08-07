import React, { useState, useEffect } from 'react';
import '../styles/app.css';
import WeatherInfo from './WeatherInfo';

export default function App() {
  const [city, setCity] = useState('Baku');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    if (!city) {
      setErrorMessage('Please enter a city name');
      return;
    }

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2bfc3e28d8dd46c29dc94420231805&q=${city}&aqi=no`
      );
      const data = await response.json();

      if (data.error) {
        setErrorMessage('Invalid city name');
        setWeatherData(null);
      } else {
        setErrorMessage('');
        setWeatherData(data);

        const tempC = data.current.temp_c;
        const body = document.body;

        if (tempC <= 0) {
          body.style.backgroundColor = 'rgb(92, 92, 190)';
        } else if (tempC > 0 && tempC <= 10) {
          body.style.backgroundColor = 'rgb(11, 34, 241)';
        } else if (tempC > 10 && tempC <= 15) {
          body.style.backgroundColor = 'rgb(58, 148, 251)';
        } else if (tempC > 15 && tempC <= 21) {
          body.style.backgroundColor = 'rgb(0, 250, 87)';
        } else if (tempC > 21 && tempC <= 26) {
          body.style.backgroundColor = 'rgb(235, 190, 114)';
        } else if (tempC > 26 && tempC <= 30) {
          body.style.backgroundColor = 'rgb(241, 199, 11)';
        } else if (tempC > 30 && tempC <= 40) {
          body.style.backgroundColor = 'rgb(213, 102, 17)';
        } else if (tempC > 40 && tempC <= 50) {
          body.style.backgroundColor = 'rgb(241, 42, 11)';
        }
      }
    } catch (error) {
      console.error('An error occurred while fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <div className="search-bar">
        <input
          className='search'
          type="text"
          placeholder="Search a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className='search-btn' onClick={fetchWeatherData}>Search</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
}
