import React from 'react'
import ArtistPresentation from '../../src/components/ArtistPresentation'

function Artists() {
  return (
    <div className=" bg-white drop-shadow-md h-4/6 flex flex-col w-screen">
      {/* Make the Title between horizontal bar */}
<hr className='w-2/6'></hr>
<div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-200"></div>
    <span className="flex-shrink mx-4 text-gray-200"><h2 className='text-black text-5xl m-5' id='galleryTitle'> Famous Artists</h2></span>
    <div className="flex-grow border-t border-gray-200"></div>
</div>
<div className='flex flex-row justify-center flex-wrap'>
      <ArtistPresentation/>
    
  </div>
    </div>

  )
}

export default Artists