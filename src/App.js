import React from 'react';
import './App.css';
import Cards from './components/Cards.js';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';
import {FaSearchLocation} from 'react-icons/fa'


function App() {
  return (
    <div className="App">
      <div>
        <SearchBar icon={<FaSearchLocation/>}
          onSearch={(ciudad) =>
             alert(ciudad)
            }
        />
      </div>
      <hr />
      <div>
        <Cards 
          cities={data}
        />
      </div>
  
      
    </div>
  );
}

export default App;
