import React from 'react'
import SearchBar from './SearchBar'
import {FaSearchLocation} from 'react-icons/fa'





function Nav({onSearch}) {
    return (
        <div className='NavBar'>
            <div>
            <img src='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_97/v1656115160/weather%20api/umbrella_without_back_fj3h1w.png' alt='logoApp'></img>
            <p>Umbrella App</p>
            </div>
                <h1>Don't take an umbrella just in case</h1>
            <SearchBar icon={<FaSearchLocation/>} onSearch={onSearch}/>
        </div>
    )
}

export default Nav
