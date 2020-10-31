import React, { useState } from 'react';
import CityForm from './pages/CityForm';
import WeatherData from './pages/WeatherData';

import { useAlert } from "react-alert";
import './App.css';



const App = () => {
  const [data, setData] = useState({ });
  const [isCitySelected, setIsCitySelected] = useState(false);

  const alert = useAlert();
  
  const getData = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4dea29c935cb5079d358c90a7dba576f`;

    if(city) {
      const response = await fetch(url);
      const weatherData = await response.json();

      if(!weatherData.name) {
        alert.error("Введіть коректне місто!")
      }
      else {
        setData({ ...weatherData });
        setIsCitySelected(true);
      }
    }
    else {
      alert.error("Введіть місто!");
    }
  }

  const goBack = () => {
    setIsCitySelected(false);
  }

  return (
    <>
      {isCitySelected ? <WeatherData data={data} getData={getData} goBack={goBack} /> : <CityForm getData={getData} />}
    </>
  );
}

export default App;
