import React, {useState, useEffect} from 'react'
import GalleryCarrousel from '../../src/components/GalleryCarrousel'
import '../../src/style/gallery.css'

/*  API KEY for call*/

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Gallery() {
 const [data, setData] = React.useState(null)
 const [currentIndex, setCurrentIndex] = useState(0);
 

  useEffect(() => {
  fetch(`${API_URL}?key=${API_KEY}&search?&p=1&ps=50&type=painting&imgonly=True&st=Objects&ii=0`)
  .then(response => response.json())
  .then(result => {
    setData(result.artObjects)
    
  })
  .catch(error => console.log('error', error));       
    }, [])
 



return (
    <div  className=" bg-white drop-shadow-md h-4/6 flex flex-col w-screen">

{/* Make the Title between horizontal bar */}
<hr className='w-2/6'></hr>
<div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-200"></div>
    <span className="flex-shrink mx-4 text-gray-200"><h2 className='text-black text-5xl m-5' id='galleryTitle'> Discover the gallery</h2></span>
    <div className="flex-grow border-t border-gray-200"></div>
</div>

{/* Carrousel */}
<GalleryCarrousel data={data} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>

      </div>
  )
}

export default Gallery