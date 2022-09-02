import React from 'react';
import './App.css';
import Cards from './components/Cards.js';
import Nav from './components/Nav';
import {useState} from 'react'
import { Route } from 'react-router-dom';
import About from './components/About';
import Ciudad from './components/Ciudad';
 


const API_KEY=process.env.REACT_APP_API_KEY;
//process.env.REACT_APP_API_KEY;



function App() {
  const [cities, setCities] = useState([]);

  function handleAddCity(city){
    if (cities.find(ciudad=>ciudad.id===city.id)) {
      alert("La ciudad ya se encuentra agregada! ")
    }
    else{
      setCities((prevCities)=>{return[city,...prevCities]})
     
    }


  }

  function handleRemoveCity(cityId){  
    setCities((prevCities)=>{
      return prevCities.filter((city)=>{return cityId !== city.id})
    })
    
  }




  function onSearch(ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
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
        }; 
        console.log(ciudad)
   
      handleAddCity(ciudad)
      
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }


  return <div className="App">
    
    <Route path='/' render={()=><Nav onSearch={onSearch}/>}/>
    <Route path='/' exact render={()=>{ return (cities.length===0)?<div>
    <h2> Insert location </h2>
    <img  className='App-logo' src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1661641295/weather%20api/89600-search-icon-1--unscreen_s4t7f6.gif' alt='busquedaCiudad'/>
    </div>
    : <Cards cities={cities} onClose={handleRemoveCity}/>}}/>
  <Route path='/ciudad/:id' component={Ciudad}/>
  <Route path='/about' component={About}/>
  
  </div>
    

}

export default App;
