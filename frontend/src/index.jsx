import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const baseURL = process.env.ENDPOINT;


  
const Weather = () => {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [currentCity, setCurrentCity] = useState('')
  
  const submit = async (e) => {
    e.preventDefault()
    const tempWeather = await getWeatherFromApi()
    setWeather(tempWeather)
    setCurrentCity(city)
    setCity('')
  }
  const getWeatherFromApi = async () => {
    try {
      let url = new URL(`${baseURL}/weather`)
      url.search = new URLSearchParams({ city: city })
      const response = await fetch(url)
      return response.json()
    } catch(error) {
      console.error(error)
    } 
  }
  let renderWeather = <div></div>
  if (weather) {
    renderWeather =
      <div>
        {currentCity}'s weather is {weather.description}
      </div>
    }
  

    return (
      <div>
        <form onSubmit={submit}>
          <div>
          Enter a city name and search it's weather!
          <input
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
          <button type="submit">Search!</button>
          </div>
        </form>
        {renderWeather}
      </div>
    );
  }


ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
