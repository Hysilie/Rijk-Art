import React, { useState, useRef, useEffect } from 'react'
import ArtistPresentation from '../../src/components/ArtistPresentation'
import '../../src/style/artists.css'
import  portraits from '../../src/data/portraits'


function Artists() {

const maxScrollWidth = useRef(0);
const [currentIndex, setCurrentIndex] = useState(0);
const carousel = useRef(null);

const movePrev = () => {
  if (currentIndex > 0) {
    setCurrentIndex((prevState) => prevState - 1);
  }
};

const moveNext = () => {
  if (
    carousel.current !== null &&
    carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
  ) {
    setCurrentIndex((prevState) => prevState + 1);
  }
};

const isDisabled = (direction) => {
  if (direction === 'prev') {
    return currentIndex <= 0;
  }

  if (direction === 'next' && carousel.current !== null) {
    return (
      carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    );
  }

  return false;
};

useEffect(() => {
  if (carousel !== null && carousel.current !== null) {
    carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
  }
}, [currentIndex]);

useEffect(() => {
  maxScrollWidth.current = carousel.current
    ? carousel.current.scrollWidth - carousel.current.offsetWidth
    : 0;
     // eslint-disable-next-line
}, []);

  return (
    <div className=" bg-white drop-shadow-md h-4/6 flex flex-col w-screen">
      {/* Make the Title between horizontal bar */}
<hr className='w-2/6'></hr>
<div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-200"></div>
    <span className="flex-shrink mx-4 text-gray-200"><h2 className='text-black text-5xl m-5' id='galleryTitle'>Famous Artists</h2></span>
    <div className="flex-grow border-t border-gray-200"></div>
</div>
     {/* Make the Carrousel */}
<div className="carousel  mx-auto w-full">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className=" md:ml-7 hover:bg-black text-white md:w-22 w-10 h-64 text-center opacity-25 hover:opacity-5 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="#333"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-black text-white  w-10 md:w-22 md:mr-7 h-64  text-center opacity-25 hover:opacity-5 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="#333"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container ml-12 mr-12 md:ml-32 md:mr-32 content-center h-96 relative flex gap-12 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >

          {portraits?.map((portrait,index) => <ArtistPresentation  key={index} {...portrait}/>)}

        </div>
      </div>
    </div>



    </div>

  )
}

export default Artists