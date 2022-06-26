import React from 'react';
import CardTemp from './CardTemp';
import style from '../components/styles.module.css'




export default function Card({city, onClose}) {
  // acá va tu código

if (Object.keys(city).length===0) {
  console.log('entre aca')
   //en Caso que no exista nada
  return <h2>Ingrese una ubicacion para conocer el clima</h2>
}
else{

  //variables y funciones
  var max=city.max
  var min=city.min
  var descr=city.descr
  var name=city.name
  var img=city.img
  var wind=city.wind
  var cloud=city.clouds
  var humidity=city.humidity


function handleOnClose() {
  if(typeof onClose==='function') onClose()
  
}

  var url= `http://openweathermap.org/img/wn/${img}@2x.png`

  //en Caso que sea la unica card
  return (wind&&cloud&&humidity)?
  
  <div className={style.card}>
      <h1 className={style.card_title}>{name}</h1>
      <img src={url} alt='Icono del clima' className={style.card_img}/>
      <span>{descr}</span>
      
      <div className={style.cards}>
      <CardTemp  label='Max' value={max} style={style.card_max}/>
      <CardTemp label='Min' value={min} style={style.card_min}/>
      </div>

        <div className={style.cards}>
        <CardTemp label='Wind Flow' img='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_58/v1655851843/weather%20api/clouds_wl5s4i.jpg' value={wind} style={style.card_img_prop}/>
        <CardTemp label='Cloudiness' img='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_56/v1655852419/weather%20api/nubosidad_vdolvy.jpg' value={cloud} style={style.card_img_prop}/>
        <CardTemp label='Humidity' img='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_76/v1655852419/weather%20api/humedad_gbzxvi.jpg' value={humidity} style={style.card_img_prop}/>
        </div>
      <button className={style.card_btn} onClick={handleOnClose}>X</button>
  
  </div>

  : <div className={style.card}>
      <h1 className={style.card_title}>{name}</h1>
      <img src={url} alt='Icono del clima' className={style.card_img}/>
      <span>{descr}</span>
      
      <div className={style.cards}>
      <CardTemp  label='Max' value={max} style={style.card_max}/>
      <CardTemp label='Min' value={min} style={style.card_min}/>
      </div>
      <button className={style.card_btn} onClick={handleOnClose}>X</button>
  
  </div>
  
};



}

  

