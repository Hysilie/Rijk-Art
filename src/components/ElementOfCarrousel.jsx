import React from 'react'
import {Link} from 'react-router-dom'


function ElementOfCarrousel({objectNumber,title,webImage:{url},principalOrFirstMaker}) {
  return (
    <div
    className="carousel-item   shadow-[#cfcfcfce] shadow-lg   text-center flex flex-col-reverse relative w-78 h-80 snap-start"
  >
    <div className='max-h-32'> <h2  className='text-black text-center text-lg m-1' id='title-art'>{`" ${title}"`}</h2>
    <hr className='w-5/6 m-auto'></hr>
    <p className='text-black text-sm m-2'>{principalOrFirstMaker}</p>
    </div>
    <a
      href={`/gallery/detail/${objectNumber}`}
      className="h-full w-full aspect-square  rounded-t-lg block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
     style={{ backgroundImage: `url(${url})` }} 
    >
     {url ? ( <img
       src={`${url}`}
        alt={title}
        className="w-full aspect-square hidden drop-shadow-xl"
      />) :null}
       
    </a>
    <a
      href={`/gallery/detail/${objectNumber}`}
      className=" cursor-pointer h-full w-full  rounded-t-lg aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-75 hover:bg-black z-10"
    >
        
      <h3 className="text-white py-6 px-3 mx-auto text-xl">
      {`"${title}"`}<br></br>by<br></br>{principalOrFirstMaker}
      </h3><br></br><br></br>
      <Link to={`/gallery/detail/${objectNumber}`}><p>Click to discover</p></Link>
    </a> 
  </div>
  )
}

export default ElementOfCarrousel