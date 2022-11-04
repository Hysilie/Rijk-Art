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
    <nav className='bg-amber-500 h-24 '>
      <div className='flex content-center items-center justify-between ml-8 text-xl text-white'>
       <div><Link to='/'><NavigationBarLogo /></Link></div>
        <ul className='flex content-center items-center sm:justify-end space-x-8 mr-8 p-3' >
          <li><Link to='/'><NavigationBarLogo /></Link></li>
            <li><Link to='/'>Home</Link></li>  
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/artists'>Artists</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/research'>Research</Link></li>
            <li> {/* search bar */}
            {/* <div class="flex justify-center items-center">
             <div class="mb-3 xl:w-60 ">
              <div class="input-group w-full mb-4 rounded flex items-center">
              <input type="search" class="form-control flex items-center min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              </div>
              </div>
            </div> */}
            </li>
        </ul>
        </div>



        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
        </Routes>
    </nav>
  )
}

export default NavigationBar