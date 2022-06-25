
import React from 'react';
import '../styles/searchBar.css'
import { useState } from 'react';


export default function SearchBar({onSearch, icon}) {
  // acá va tu código
  const [city, setCity] = useState('');

  function handleOnSearch() {
    if(typeof onSearch==='function'){
      const input=document.getElementById('inputCity')
      onSearch(input.value)
    }
    
  }
  //var city= document.getElementById('inputCity').val()
  return <div className='searchBar'>
    <input className='search_input' type='text' id='inputCity' placeholder='Ciudad...' />
    <button type='submit' className='btn_search' onClick={handleOnSearch} > 
    {icon&&<div className='icon'>{icon}</div>}
    Agregar</button>
    
    </div>
};