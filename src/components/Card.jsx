import React from 'react';
import CardTemp from './CardTemp';

export default function Card({max, min,descr, name, img, onClose, wind, cloud, humidity}) {
  // acá va tu código
function handleOnClose() {
  if(typeof onClose==='function') onClose();
  
}

  var url= `http://openweathermap.org/img/wn/${img}@2x.png`
  return<div>

      <button onClick={handleOnClose}>X</button>
      <img src={url} alt='Icono del clima'/>
      <span>{descr}</span>
      <span>{name}</span>
      <CardTemp label='Min' value={min}/>
      <CardTemp label='Max' value={max}/>
      <div>
      <CardTemp label='Wind Flow' img='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_58/v1655851843/weather%20api/clouds_wl5s4i.jpg' value={wind}/>
      <CardTemp label='Cloudiness' img='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_56/v1655852419/weather%20api/nubosidad_vdolvy.jpg' value={cloud}/>
      <CardTemp label='Humidity' img='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_76/v1655852419/weather%20api/humedad_gbzxvi.jpg' value={humidity}/>
      </div>
  
  </div>

  
};


