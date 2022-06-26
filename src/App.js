import React from 'react';
import './App.css';
import Cards from './components/Cards.js';
import Nav from './components/Nav';
import {useState} from 'react'
import Card from './components/Card';


const ky='90411983104347c80140c63d31b5e8f3'
//process.env.REACT_APP_API_KEY;



function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({})


  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ky}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        setCity({
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          descr: recurso.weather[0].description,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          humidity:recurso.main.humidity,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        }); 
        if(cities.includes(city)) deleteRepeat(city,cities)
      
        if (cities.length===5) {
          setCities(cities.shift())
        }
        setCities(
          oldCities => [...oldCities, city]);
        console.log(cities)
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  function deleteRepeat(city, cities) {
    var idx=cities.findIndex(city)
    setCities(cities.splice(idx,1))
  }


  return (
    <div className="App">
      <div className='Navbar'>
        <Nav onSearch={onSearch} />
      </div>

      <div>
        <Card
        city={city}
        onClose={() => alert(city.name)}/>
      </div>
      <div>
        <Cards 
          cities={cities}
        />
      </div>
  
      
    </div>
  );
}

export default App;
