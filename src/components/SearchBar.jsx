
import React from 'react';
import '../styles/searchBar.css'


export default function SearchBar({onSearch, icon}) {
  // acá va tu código

  function handleOnSearch(event) {
    event.preventDefault()

    if(typeof onSearch==='function'){
      const input=document.getElementById('inputCity')
      onSearch(input.value)
      input.value=''
    }
  }

  return <form className='searchBar' onSubmit={handleOnSearch}>
    <input className='search_input' type='text' id='inputCity' placeholder='Ciudad...'/>
    <button  className='btn_search' type='submit' > 
    {icon&&<div className='icon'>{icon}</div>}
    Agregar</button>
  
    </form>
};