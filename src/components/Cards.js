import React from 'react';
import Card from './Card';
import  PropTypes from 'prop-types';
import style from '../components/styles.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={style.cards} style={{display: 'flex'}}>
    {cities.map((city)=>
    <Card 
    key={city.id}
    max={city.main.temp_max}
    min={city.main.temp_min}
    descr={city.weather[0].description}
    name={city.name}
    img={city.weather[0].icon}
    onClose={() => alert(city.name)}
    wind={city.wind.speed}
    cloud={city.clouds.all}
    humidity={city.main.humidity}>
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
