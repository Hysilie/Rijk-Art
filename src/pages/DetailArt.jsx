import React from 'react'
import '../../src/style/detailArt.css'

function DetailArt() {
  return (
    <div className=" bg-white drop-shadow-md h-4/6 flex flex-col w-screen">
      {/* Make the Title between horizontal bar */}
<hr className='w-2/6'></hr>
<div className="hidden md:flex relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-200"></div>
    <span className="flex-shrink mx-4 text-gray-200"><h2 className='text-black text-5xl m-5' id='galleryTitle'>Focus</h2></span>
    <div className="flex-grow border-t border-gray-200"></div>
</div>

<div className="flex flex-wrap justify-center m-2 md:m-5 md:flex-row">
  <div className="flex-2 w-6/12 sm:w-4/12 px-4">
    <img src="https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0" alt="focus" className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
   {/* Little screen */}</div>
   <div className=' text-black  md:hidden w-96'>
   
        <h2 className='mt-2 text-center text-2xl' id='detail-title'>The Night Watch</h2> {/* title */}
         <p className='text-center text-sm'>Rembrandt van Rijn</p> {/* principalMakers": [{"name" */}
   
          <div className='flex justify-center items-center space-x-3'>
         <p className=' text-center text-slate-300 font-bold'>1642</p> {/* dating": {"presentingDate":  */}
         <p className='text-center text-sm'>canvas , oil paint (paint)</p> {/* materials": ["canvas","oil paint (paint) */}
          </div>
        <p className='text-sm mt-2'> Rembrandt’s largest, most famous canvas was made for the Arquebusiers guild hall. This was one of several halls of Amsterdam’s civic guard, the city’s militia and police. \r\nRembrandt was the first to paint figures in a group portrait actually doing something. The captain, dressed in black, is telling his lieutenant to start the company marching. The guardsmen are getting into formation. Rembrandt used the light to focus on particular details, like the captain’s gesturing hand and the young girl in the foreground. She was the company mascot</p> 
    </div>

{/* Mid screen or more */}
<div className='text-black hidden md:inline w-96  flex-1 m-5 '>
         <h2 className=' text-4xl' id='detail-title'> The Night Watch   </h2>
         <p className=' text-base'>Rembrandt van Rijn</p>
         <p className='text-slate-300 font-bold'>1642</p> {/* dating": {"presentingDate":  */}
         <p></p>
         <p className='text-sm mt-2'> Rembrandt’s largest, most famous canvas was made for the Arquebusiers guild hall. This was one of several halls of Amsterdam’s civic guard, the city’s militia and police. \r\nRembrandt was the first to paint figures in a group portrait actually doing something. The captain, dressed in black, is telling his lieutenant to start the company marching. The guardsmen are getting into formation. Rembrandt used the light to focus on particular details, like the captain’s gesturing hand and the young girl in the foreground. She was the company mascot</p>
    </div>

 </div>
 
 {/* sm screen */}
{/*   <div className='text-black md:hidden'> Salut</div> */}
</div>

  )
}

export default DetailArt