import React from 'react';


const WeatherContext = React.createContext({ 
  temp: null,
  humidity: null,
  pressure: null,
});

export default WeatherContext;