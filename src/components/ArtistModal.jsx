import React from 'react'
import loupe from '../../src/images/loupe.png'
import arrow from '../../src/images/arrow.png'


function ArtistModal() {
const [showModal, setShowModal] = React.useState(false);
  return (
    <div className=" flex justify-center">
        <button  onClick={() => setShowModal(true)} type="button" className=" flex justify-center font-normal text-slate-700 hover:text-slate-400">
            <img className='h-5 w-5' src={loupe} alt='more info'/>
        </button>
        
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header content*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 id="modal-title" className="text-3xl font-semibold">
                    Vincent Van Gogh
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*Body of the modal*/}
                <div className="relative p-6 flex-auto">
                    <h2 className='text-xs mt-0  text-slate-300 font-bold uppercase'>Date </h2><p className='m-2'>30-10-1221 / 21-04-1241</p>
                    <h2 className='text-xs mt-0  text-slate-300 font-bold uppercase'>Art movement </h2> <p className='m-2'>Pointillism -  Neo-impressionism</p>
                    <h2 className='text-xs mt-0  text-slate-300 font-bold uppercase'>About</h2>
                  <p className="m-2  leading-relaxed">
                  Vincent van Gogh, né le 30 mars 1853 à Groot-Zundert, aux Pays-Bas, et mort le 29 juillet 1890 à Auvers-sur-Oise, en France, est un peintre et dessinateur néerlandais. Son œuvre pleine de naturalisme, inspirée par l'impressionnisme et le pointillisme, annonce le fauvisme et l'expressionnisme
                  </p>
                </div>
                <div className='flex flex-col justify-center m-4'>
                <button  onClick={() => console.log('Link to the gallery')} type="button" className=" flex justify-center font-normal text-slate-700 hover:text-slate-400"> artist gallery </button>
       
                <button  onClick={() => console.log('Link to the gallery')} type="button" className=" flex justify-center font-normal text-slate-700 hover:text-slate-400">
                 <img className='h-5 w-5' src={arrow} alt='more info'/> </button>

       
                </div>
                {/*Footer with the close button*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default ArtistModal