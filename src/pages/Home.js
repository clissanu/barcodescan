import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/flow-clark-DjfAARZ4D1I-unsplash.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})` }}>
      <div 
        className='headerContainer' 
      >
        <h1>Hair Products Scanner</h1>
        <p>test the scanner here</p>
        <Link to="/scanner">
         <button>try it now</button>
        </Link>
      </div>
 
    </div>
  )
}

export default Home