import React, { useEffect, useState } from 'react';
import {getWeatherBackground} from './utils/weatherUtils';
import './styles/base.css'
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';


const API_KEY='76e51cf35789a0121041070ca8fa30f9'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchCity, setSearchCity] = useState('Mombasa')
  const [error, setError] = useState('')

  const fetchWeatherData =async (city)=> {
    setLoading(true)
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    console.log(response)
    if (!response.ok){
      throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log(data)
    setWeatherData(data)
  } catch (err){
      setError(err.message)
      setWeatherData(null)
  }finally{
    setLoading(false)
  }
  }
//Fetch Whether data
  useEffect(() => {
    fetchWeatherData(searchCity)
  }, [])

  const handleSearch = (e)=>{
    e.preventDefault()
    if(searchCity.trim()){
      fetchWeatherData(searchCity.trim())
    }
  }

  const currentBackground = weatherData
    ? getWeatherBackground(weatherData.weather[0].main)
    : getWeatherBackground('default')

  return (
    <div
      className='weather-app'
      style = {{ backgroundImage: `url(${currentBackground})`}}>
      {/*left side*/}

      <div className='main-weather'>
        <div className='app-title'>window.weather</div>

        {loading && <LoadingSpinner/>}

        {error && <ErrorMessage message={error}/>}

        {
          weatherData && (
            <WeatherDisplay weatherData={weatherData}/>
          )
        }
      </div>
        {/* right side - search and weather details */}
      <div className = 'sidebar'>
          <SearchBar 
              searchCity = {searchCity}
              setSearchCity = {setSearchCity}
              handleSearch = {handleSearch}
          />

      </div>

    </div>
  );
}  

export default App;