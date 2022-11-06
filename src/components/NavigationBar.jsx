import React, {useState} from 'react'
import {Link} from 'react-router-dom'
/*Import all routes*/
import AllRoutes from '../components/AllRoutes'
/* import logo */
import logoRijk from '../images/logoRijk.png'
/* import social media */
import SocialMedias from './SocialMedias'

function NavigationBar() {
const [navbar, setNavbar] = useState(false);


  return (
   
<nav className="w-full bg-amber-500 h-screen flex flex-col space-y-16  text-white">
    <div>
  <div className=" bg-amber-500 justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-4  text-xl">
    <div>
{/* Div contain the Logo */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
           
              <div className="h-10 w-16" ><Link to='/'><img className='object-fill' alt='Logo Rijk Art' src={logoRijk}/></Link></div>
            
{/* Menu burger - imported tailwind */}
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
        <div className={`flex-1 justify-self-center bg-amber-500  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? "block" : "hidden"
              }`} >

{/* Menu -burger - list with links to page  */}
            <ul className="drop-shadow-lg shadow-black items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0  z-20">
              <div className='absolute w-full'>

              </div>
                            <li className="text-white hover:underline">
                               <Link to='/'>Home</Link>
                            </li>
                            <li className="text-white hover:underline">
                               <Link to='/gallery'>Gallery</Link>
                            </li>
                            <li className="text-white hover:underline">
                                <Link to='/artists'>Artists</Link>
                            </li>
                            <li className="text-white hover:underline">
                               <Link to='/about'>About</Link>
                            </li>
                            <li className="text-white hover:underline">
                                <Link to='/research'>Research</Link>
                            </li>
                            <li className="text-white hover:underline">
                                <Link to='/gallery/search'>GallerySearch</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            

            </div>

    
       <AllRoutes />
       <SocialMedias />
    </nav>
  )
}

export default NavigationBar