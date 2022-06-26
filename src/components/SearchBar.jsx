
import React from 'react';
import '../styles/searchBar.css'


export default function SearchBar({onSearch, icon}) {
  // acá va tu código

  function handleOnSearch() {
    if(typeof onSearch==='function'){
      const input=document.getElementById('inputCity')
      onSearch(input.value)
      input.innerHTML=''
    }
  }

  //var city= document.getElementById('inputCity').val()
  return <div className='searchBar'>
    <input className='search_input' type='text' id='inputCity' placeholder='Ciudad...'/>
    <button  className='btn_search' onClick={handleOnSearch} > 
    {icon&&<div className='icon'>{icon}</div>}
    Agregar</button>
    
    </div>
};