import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY=process.env.REACT_APP_API_KEY;

export default function Ciudad() {
    

    const [city, setCity] = useState([undefined]);
    const {id}=useParams()

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`)
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
            
            setCity(ciudad)
          
          } else {
            setCity(null)
          }
        });
      },[id])

      return(<>
        {city===undefined&&<h1>Loading</h1>}
        {city===null&&<div>
                    <h1>404- NOT FOUND</h1>
                    <img  className='App-logo' src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1656542407/weather%20api/91191-404-notfound_b4bkzs.gif' alt='CiudadNoEncontrada'/>
                    </div>}
        {city&& <div className="ciudad">
                        <div className="container">
                            <h2>{city.name}</h2>
                            <div className="info">
                                <div>Temperatura: {city.temp} ºC</div>
                                <div>Clima: {city.weather}</div>
                                <div>Viento: {city.wind} km/h</div>
                                <div>Cantidad de nubes: {city.clouds}</div>
                                <div>Latitud: {city.latitud}º</div>
                                <div>Longitud: {city.longitud}º</div>
                            </div>
                    </div>
                </div>}
        
      
      
      </>)

    
}