import React, {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'


/* import every pages corresponding to all elements */
import About from '../pages/About'
import Artists from '../pages/Artists'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Research from '../pages/Research'
/* import logo */
import NavigationBarLogo from './NavigationBarLogo'
import logoRijk from '../images/logoRijk.png'


function NavigationBar() {
const [navbar, setNavbar] = useState(false);


  return (
   
<nav className="w-full bg-amber-500 h-24 text-white">
  <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  text-xl">
    <div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              
              <div className="h-10 w-16" ><img className='object-fill' src={logoRijk}/></div>
            </a>
        <div className="md:hidden">
             <button className="p-2  rounded-md outline-none  focus:border"  onClick={() => setNavbar(!navbar)} >
        {navbar ? (
         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
               clipRule="evenodd" />
        </svg> ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
         <path   strokeLinecap="round"  strokeLinejoin="round"  d="M4 6h16M4 12h16M4 18h16" />  </svg>
          )}
               </button>
          </div>
           </div>
     </div>
    <div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? "block" : "hidden"
              }`} >
            <ul className=" drop-shadow-lg shadow-blackitems-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                            <li className="text-white hover:underline">
                                <a href="javascript:void(0)"><Link to='/'>Home</Link></a>
                            </li>
                            <li className="text-white hover:underline">
                                <a href="javascript:void(0)"><Link to='/gallery'>Gallery</Link></a>
                            </li>
                            <li className="text-white hover:underline">
                                <a href="javascript:void(0)"><Link to='/artists'>Artists</Link></a>
                            </li>
                            <li className="text-white hover:underline">
                                <a href="javascript:void(0)"><Link to='/about'>About</Link></a>
                            </li>
                            <li className="text-white hover:underline">
                                <a href="javascript:void(0)"><Link to='/research'>Research</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
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