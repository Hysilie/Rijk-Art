import React from 'react'
import GalleryCarrousel from '../../src/components/GalleryCarrousel'
import '../../src/style/gallery.css'

function Gallery() {
  return (
    <div  className=" bg-white drop-shadow-md h-4/6 flex flex-col w-screen">

{/* Make the Title between horizontal bar */}
<hr className='w-2/6'></hr>
<div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-200"></div>
    <span class="flex-shrink mx-4 text-gray-200"><h2 className='text-black text-5xl m-5' id='galleryTitle'> Gallery</h2></span>
    <div class="flex-grow border-t border-gray-200"></div>
</div>

{/* Carrousel */}
<GalleryCarrousel />

      </div>
  )
}

export default Gallery