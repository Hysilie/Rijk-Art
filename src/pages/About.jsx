import React from 'react'
import '../../src/style/about.css'
import working from '../images/working.jpg'

function About() {
  return (
    <div  className=" bg-white drop-shadow-md w-screen h-4/6 flex flex-col w-screen">

    {/* Make the Title between horizontal bar */}
    <hr className='w-2/6'></hr>
    <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-gray-200"><h2 className='text-black text-5xl m-5' id='galleryTitle'> About </h2></span>
        <div className="flex-grow border-t border-gray-200"></div>
    </div>

    {/* Text section visible in any ways and  */}
    <div className=' m-5  md:flex flex-wrap flex-col md:flex-nowrap md:flex-row justify-center border w-auto h-96 shadow-lg'>
    <div className=' m-2  text-black flex flex-col justify-top max-w-full max-h-full  md:w-1/2'>
      <h2 className='' id='project-title'>The Project</h2>
      <p className='text-sm m-1 md:m-5'>The Rijks museum is a great place to visit. 
      It has so much to see, not just art ! You can learn about Dutch history and culture, 
      see beautiful architecture. I choose these theme after visiting Netherlands last year and
       because there's also plenty of design and creative opportunities in the field of digital culture,
        due to there <a href='https://data.rijksmuseum.nl/object-metadata/api/' alt='Api link' target='_blank' className='text-slate-300 font-bold '>API !</a> (thanks !)

      <br></br> I made a small project based on React. This was my first solo experience 
      , so little things can not look very good in front of everyone, sorry for mistakes,
       I tried to make some comments on my code.</p>
     
       <h2 className='' id='project-title'>Tech Stack</h2>
       <p className='text-sm m-1 md:m-5'>React, Tailwind, Github, Figma </p> 
       
       <h2 className='' id='project-title'>Documentation</h2>
       <p className='text-sm  m-1 md:m-5'>You can find all this project on my <a href='https://github.com/Hysilie/Rijk-Art' alt='Api link' target='_blank' className='text-slate-300 font-bold '>Github !</a> </p> 

    </div>
    <div className='hidden md:flex text-black max-w-full max-h-full   flex justify-center w-1/2'><img src={working} alt='working logo'className='max-w-full h-full'/></div>
    </div>
          </div>
  )
}

export default About