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
  //const [city, setCity] = useState({})

  function handleAddCity(city){
    if (cities.find(ciudad=>ciudad.id===city.id)) {
      alert("La ciudad ya se encuentra agregada! ")
    /*setCities((prevCities)=>{
      prevCities=cities.splice(idx,1)
      return [city,...prevCities]
    })*/
      
    }
    else{
      setCities((prevCities)=>{return[city,...prevCities]})
      console.log(cities)
    }


  }

  function handleRemoveCity(cityId){  
    setCities((prevCities)=>{
      return prevCities.filter((city)=>{return cityId !== city.id})
    })
    
  }

  /*function upDateLastCity(city) {
    setCity((prevcity)=>{
      prevcity=city
      return prevcity
    }
    )
  }*/


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
        /*if(cities.includes(city)) deleteRepeat(city,cities)
      
        if (cities.length===5) {
          setCities((prevCities)=>{return prevCities.shift()})
        }*/
      handleAddCity(ciudad)
      
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

 /* function deleteRepeat(city, cities) {
    var idx=cities.findIndex(city)
    setCities(cities.splice(idx,1))
  }*/


  return <div className="App">
    
    <Route path='/' render={()=><Nav onSearch={onSearch}/>}/>
    <Route path='/' exact render={()=>{ return (cities.length===0)?<div>
    <h1> Insert location </h1>
    <img  className='App-logo' src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1656542745/weather%20api/69711-reporte_qk0zuq.gif' alt='busquedaCiudad'/>
    </div>
    : <Cards cities={cities} onClose={handleRemoveCity}/>}}/>
    {/*<Route path='/ciudad/:id' exact render={({match})=>{
    const city=cities.find((city)=>city.id===parseInt(match.params.id))
    return  city? <Ciudad city={city} />  
    : <div>
      <h1>404- NOT FOUND</h1>
      <img  className='App-logo' src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1656542407/weather%20api/91191-404-notfound_b4bkzs.gif' alt='CiudadNoEncontrada'/>
      </div>
    }}/>*/}
  <Route path='/ciudad/:id' component={Ciudad}/>
  <Route path='/about' component={About}/>
  
  </div>
    

}

export default App;
