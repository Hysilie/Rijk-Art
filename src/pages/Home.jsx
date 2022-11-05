import React from 'react'
import backgroundHome from '../../src/images/backgroundHome.jpeg'
import vector from '../../src/images/vector.svg'
import '../../src/style/home.css'


const Home = () => {
  return (
    /* Make a container  */
    <div className=" bg-slate-50 drop-shadow-md h-4/6 flex  w-screen home" style={{backgroundImage: `url('${backgroundHome}')`}}>
    <div className='vector h-full flex-1' style={{backgroundImage: `url('${vector}')`}}>
          <div className="text-black h-full flex items-center">
            <div className="flex flex-col">
          <p  className=" w-20 text-4xl lg:text-4xl m-5"  id="home-title">Explore  the Rijksmuseum</p>
          <span id="under-title" className='text-lg hidden lg:inline m-5'>Discover a great collection of art</span>
          </div></div>
</div>

    </div>

  )
}

export default Home