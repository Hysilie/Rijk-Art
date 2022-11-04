import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

/* import every pages corresponding to all elements */
import About from '../pages/About'
import Artists from '../pages/Artists'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Research from '../pages/Research'
/* import logo */
import NavigationBarLogo from './NavigationBarLogo'


function NavigationBar() {
  return (
    <div>
        <ul><li><Link to='/'><NavigationBarLogo /></Link></li>
            <li><Link to='/'>Home</Link></li>  
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/artists'>Artists</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/research'>Research</Link></li>
        </ul>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
        </Routes>
    </div>
  )
}

export default NavigationBar