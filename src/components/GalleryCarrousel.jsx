import { useState, useRef, useEffect } from 'react';

// Need to import
const data = {ressources: [
    {title: 'title1', link: 'link1', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
    {title: 'title2', link: 'link2', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
    {title: 'title3', link: 'link3', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
    {title: 'title4', link: 'link4', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
    {title: 'title5', link: 'link5', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
    {title: 'title6', link: 'link6', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
    {title: 'title7', link: 'link7', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
    {title: 'title8', link: 'link8', imageUrl: 'https://img.20mn.fr/6j2p_uHHTBSPl-OJR5iakyk/1200x768_allier_un_deuxieme_chat_tue_par_un_tir_d_arbalete_a_domerat1'},
]}

const GalleryCarrousel = () => {
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
  }, []);

  return (
    <div className="carousel my-12 mx-auto w-full">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className=" md:ml-7 hover:bg-black text-white md:w-22 w-10 h-64 text-center opacity-75 hover:opacity-25 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
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
            className="hover:bg-black text-white  w-10 md:w-22 md:mr-7 h-64  text-center opacity-25 hover:opacity-25 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
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
          className="carousel-container ml-12 mr-12 md:ml-32 md:mr-32 content-center h-72 relative flex gap-12 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.ressources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item   shadow-[#cfcfcfce] shadow-lg   text-center flex flex-col-reverse relative w-78 h-64 snap-start"
              >
                <div className=' h-32'> <h2  className='text-black text-center text-lg m-1' id='title-art'>" Titre de l'oeuvre "</h2>
                <hr className='w-5/6 m-auto'></hr>
                <p className='text-black text-sm m-2'>Nom De l'Artiste</p>
                </div>
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square  rounded-t-lg block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden drop-shadow-xl"
                  />
                   
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full  rounded-t-lg aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-75 hover:bg-black z-10"
                >
                    
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {/* {resource.title} */} "Titre de l'oeuvre"
                  </h3>
                  <p>Click to discover</p>
                </a> 
              </div>
             


            );
          })}



        </div>
      </div>
    </div>
  );
};

export default GalleryCarrousel