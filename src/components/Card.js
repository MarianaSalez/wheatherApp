import React from 'react';
import CardTemp from './CardTemp';
import style from '../components/styles.module.css'




export default function Card({
  id, max, min, descr,name,img,wind,cloud,humidity,onClose}) {
  // acá va tu código


function handleOnClose() {
  if(typeof onClose==='function') onClose(id)
  
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
    <button className={style.card_btn} onClick={handleOnClose}>X</button>
      
      <img src={url} alt='Icono del clima' className={style.card_img}/>
      <span>{descr}</span>
      
      <div className={style.cards}>
      <CardTemp  label='Max' value={max} style={style.card_max}/>
      <CardTemp label='Min' value={min} style={style.card_min}/>
      </div>
      <h1 className={style.card_title}>{name}</h1>
  
  </div>
  
};





  

