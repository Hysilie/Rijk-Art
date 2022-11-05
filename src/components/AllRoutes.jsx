import React from 'react'
import {Routes, Route} from 'react-router-dom'

/* import every pages corresponding to all elements */
import About from '../pages/About'
import Artists from '../pages/Artists'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Research from '../pages/Research'

function AllRoutes() {
  return (
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/artists" element={<Artists />} />
    <Route path="/about" element={<About />} />
    <Route path="/research" element={<Research />} />
    </Routes>
  )
}

export default AllRoutes;