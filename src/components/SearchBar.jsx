
import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código

  function handleOnSearch() {
    if(typeof onSearch==='function'){
      const input=document.getElementById('inputCity')
      onSearch(input.value)
    }
    
  }
  //var city= document.getElementById('inputCity').val()
  return <div>
    <input type='text' id='inputCity' placeholder='Ciudad...' >
    </input>
    <button onClick={handleOnSearch} > Agregar</button>
    
    </div>
};