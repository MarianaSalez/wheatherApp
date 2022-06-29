import React from 'react'
import SearchBar from './SearchBar'
import {FaSearchLocation} from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Nav({onSearch}) {
    return (
        <div className='NavBar'>
            <Link to='/'>
            <div>
            <img src='https://res.cloudinary.com/dvkvyi1dr/image/upload/c_scale,h_97/v1656115160/weather%20api/umbrella_without_back_fj3h1w.png' alt='logoApp'></img>
            <p className='p_link'>Umbrella App</p>
            </div>
            </Link>
            <div>
            <h1>Don't take an umbrella just in case</h1> 
            <SearchBar icon={<FaSearchLocation/>} onSearch={onSearch}/>
            </div>
                
            <Link to='/about'>
                <p className='p_link'>About</p>
            </Link>
        </div>
    )
}

export default Nav
