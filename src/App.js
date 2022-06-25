import React from 'react';
import './App.css';
import Cards from './components/Cards.js';
import data from './data.js';
import Nav from './components/Nav';
import {useState} from 'react'





function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=90411983104347c80140c63d31b5e8f3&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  
  return (
    <div className="App">
      <div className='Navbar'>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards 
          cities={data}
        />
      </div>
  
      
    </div>
  );
}

export default App;
