import React from 'react';
import './App.css';
import Cards from './components/Cards.js';
import Nav from './components/Nav';
import {useState} from 'react'
import Card from './components/Card';
 


const API_KEY=process.env.REACT_APP_API_KEY;
//process.env.REACT_APP_API_KEY;



function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({})

  function handleAddCity(city){
    if (cities.includes(city)) {
      var idx=cities.findIndex(city)
    setCities(cities.splice(idx,1))
      
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

  function upDateLastCity(city) {
    setCity((prevcity)=>{
      prevcity=city
      return prevcity
    }
    )
  }


  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
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
        upDateLastCity(ciudad)
      
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

 /* function deleteRepeat(city, cities) {
    var idx=cities.findIndex(city)
    setCities(cities.splice(idx,1))
  }*/


  return ((Object.keys(city).length===0)?
  <div className="App">
  <div className='Navbar'>
    <Nav onSearch={onSearch} />
  </div>
  <div>
    <p> Ingrese localidad buscada</p>
  </div>
  </div>
  :<div className="App">
  <div className='Navbar'>
    <Nav onSearch={onSearch} />
  </div>
  <div>
    <Card key={city.id}
    id={city.id}
    max={city.max}
    min={city.min}
    descr={city.descr}
    name={city.name}
    img={city.img}
    wind={city.wind}
    cloud={city.clouds}
    humidity={city.humidity}

onClose={handleRemoveCity}/>
  </div>


  <div>
  <Cards 
      cities={cities.filter((ciudad)=>{return city.id !== ciudad.id})} onClose={handleRemoveCity}
/>
  </div>

  
</div>
  
  
  
  );
}

export default App;
