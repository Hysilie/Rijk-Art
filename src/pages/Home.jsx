import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import vector from '../../src/images/vector.svg'
import '../../src/style/home.css'


const Home = () => {

  /* State for the animation of background */
  const [backgroundID, setBackgroundID] = useState("home1")
  useEffect(() => {
    
/* set a timer to start the siwtch with the next background */
    const timer = setTimeout(() => {
    
      setBackgroundID("home2");
    }, 10000);
  
    setInterval(function() {
      setBackgroundID("home1");
/* Interval to put the first background */
    }, 10000)
    setInterval(function() {
      setBackgroundID("home2");
/* And again for the second */
}, 20000)
 /* Clear the time */
    return () => {
      clearTimeout(timer);
    };
  }, []);

  
  return (
   

    <div  className=" bg-slate-50 drop-shadow-md h-4/6 flex  w-screen" id={`${backgroundID}`}>
    <div className='vector h-full flex-1' style={{backgroundImage: `url('${vector}')`}}>
          <div className="text-black h-full flex items-center">
            <div className="flex flex-col">
          <p  className=" w-20 text-4xl lg:text-4xl m-5"  id="home-title">Explore the Rijksmuseum</p>
          <span id="under-title" className='text-lg hidden lg:inline m-5'><Link to ='/gallery'>Discover a great collection of art</Link></span>
          </div></div>
</div>
    </div>

  )
}

export default Home