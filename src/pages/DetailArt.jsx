import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../src/style/detailArt.css'
import DetailArtImage from '../../src/components/DetailArtImage'
import ReturnButton from '../../src/components/ReturnButton'

function DetailArt() {
const [art, setArt] = useState([])
const {id} = useParams();


const fetchArt =() => {
    fetch(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=puw2AEY6`)
    .then((response) => response.json())
    .then((result) => {
        setArt(result)
    })
    .catch((error) => console.log('error', error));
}
useEffect(() => {
    fetchArt();
    // eslint-disable-next-line
}, [])

  return (


    <div className="bg-white drop-shadow-md h-4/6 flex flex-col w-screen box-border">

{/* Make the Title between horizontal bar */}
<hr className="w-2/6"></hr>
<div className="hidden md:flex relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-200"></div>
    <span className="flex-shrink mx-4 text-gray-200">
      <h2 className='text-black text-5xl m-5' id='galleryTitle'>Focus</h2>
      </span>
    <div className="flex-grow border-t border-gray-200"></div>
</div>


<div className="flex flex-wrap justify-center w-5/6 m-2 md:-m-5 md:flex-row">
  <div className="flex-2 w-6/12 sm:w-4/12 px-4 ml-5">
    {art.artObject ? <DetailArtImage webImage={art.artObject.webImage}/>:null}
    
    </div>

{/* setup for small screen */}
   <div className=' text-black  md:hidden w-96'>
   
       {art.artObject?<h2 className='mt-2 text-center text-2xl' id='detail-title'>{art.artObject.title}</h2>:null}  {/* title */}
         {art.artObject?<p className='text-center text-sm'>{art.artObject.principalMaker}</p> :null}{/* principalMakers": [{"name" */}
   
          <div className='flex justify-center items-center space-x-3'>
          {art.artObject? <p className='text-slate-300 font-bold'>{art.artObject.dating.sortingDate}</p> :null}

{/* map for different materials used */}
         {art.artObject? <p className='text-center text-sm'>{art.artObject.materials.map(
              (material, index) => <span key={index}>{material}</span>)}</p> :null}  
          </div>
          {art.artObject? <p className=' text-justify text-sm mt-2'> {art.artObject.plaqueDescriptionEnglish}</p>:null}
    </div>

{/* Mid screen or more */}
<div className='text-black hidden md:inline w-96  flex-1 m-5 '>
{art.artObject? <h2 className=' text-4xl' id='detail-title'> The Night Watch   </h2> : null}
         {art.artObject? <p className=' text-base'>{art.artObject.principalMaker}</p> : null } 
        {art.artObject? <p className='text-slate-300 font-bold'>{art.artObject.dating.sortingDate}</p> :null}
        {art.artObject? <p className=' text-sm'>{art.artObject.materials.map(
              (material, index) => <span key={index}>{material}</span>)}</p> :null}  
         {art.artObject? <p className=' text-justify text-sm mt-2'> {art.artObject.plaqueDescriptionEnglish}</p>:null}
    </div>

<div >
  <ReturnButton />
</div>
 </div>
 
</div>

  )
}

export default DetailArt