import React from 'react';
import CardTemp from './CardTemp';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
function handleOnClose() {
  if(typeof onClose==='function') onClose();
  
}

  var url= `http://openweathermap.org/img/wn/${img}@2x.png`
  return<div>

    <button onClick={handleOnClose}>X</button>
    <span>{name}</span>
    <CardTemp label='Min' value={min}/>
    <CardTemp label='Max' value={max}/>
    <img src={url} alt='Icono del clima'/>



  </div>
  
  
  /*<div>
    <button onClick={onClose}>X</button>
    <table>
      <thead>
        <tr>
          <th>
          {name}
          </th> 
        </tr>
      </thead>
      <tbody>
      <tr>
          <th>Min</th>
          <th>Max</th>
          <th><img src={url} alt='Icono del clima' /></th>
        </tr>
        <tr>
          <th>{min}</th>
          <th>{max}</th>
          <th></th>
        </tr>
      </tbody>  
    </table>
  </div>*/
  
};


