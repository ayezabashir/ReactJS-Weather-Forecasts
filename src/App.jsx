import './App.css'
import Search from './components/search/Search'
import Weather from './components/weather/Weather';
import { weather_api_url, weather_api_key } from './api';
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(' ');
    const weatherFetch = fetch(`${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`);
    const forecastFetch = fetch(`${weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`);

    Promise.all([weatherFetch, forecastFetch])
      .then(async (resp) => {
        const weatherResp = await resp[0].json();
        const forecastResp = await resp[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResp });
        setForecast({ city: searchData.label, ...forecastResp });
      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
    </div>
  )
}

export default App
