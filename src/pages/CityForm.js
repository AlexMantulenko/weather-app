import React, { useState } from 'react';
import './CityForm.css';

const CityForm = ({ getData }) => {
  const [city, setCity] = useState('');

  const handlerCity = e => {
    setCity(e.target.value);
  }

  return (
    <div className="form-page">
        <form>
            <input 
              type="text" 
              value={city} 
              onChange={handlerCity} 
              placeholder="Type your city here"
            />
            <button onClick={(e) => {
              e.preventDefault();
              getData(city);
            }}>Get info</button>
        </form>
    </div>
  );
}

export default CityForm;
