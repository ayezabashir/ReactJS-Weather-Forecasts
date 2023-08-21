import './App.css'
import Search from './components/search/Search'
import Weather from './components/weather/Weather';
import { weather_api_url, weather_api_key } from './api';

function App() {

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);

    const [lat, lon] = searchData.value.split(' ');
    let cityName = searchData.label.split(',')[0];
    const weatherApi = `${weather_api_url}?lat=${lat}&lon=${lon}&appid=${weather_api_key}`;
    fetch(weatherApi).then(resp => resp.json()).then(data => console.log(data));

  }


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <Weather />
    </div>
  )
}

export default App
