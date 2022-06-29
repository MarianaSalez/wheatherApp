import React from 'react';
import Card from './Card';
import  PropTypes from 'prop-types';
import style from '../components/styles.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (cities.length===0)?
  <div></div>:
  <div className={style.cards} style={{display: 'flex'}}>
    {cities.map((city)=>
    <Card 
    key={city.id}
    id={city.id}
    max={city.max}
    min={city.min}
    descr={city.descr}
    name={city.name}
    img={city.img}
    wind={city.wind}
    cloud={city.clouds}
    humidity={city.humidity}
    
    onClose={()=>onClose(city.id)}>
    </Card>
    )}
    </div>
};

Card.propTypes={
  max: PropTypes.number,
  min: PropTypes.number,
  name:PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
}

