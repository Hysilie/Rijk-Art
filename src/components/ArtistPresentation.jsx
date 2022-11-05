import React from 'react'
import loupe from '../../src/images/loupe.png'

function ArtistPresentation() {
  return (
    <div>

<div className="relative w-80 mt-6  break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20 h-80">
    <div className="px-6">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className="relative">
                    <img src="https://lh3.googleusercontent.com/Ckjq-HkB2XhEsbuMsei0MR5fLTODfkcXY8qQTG-XLHVxE0jLO9DnSYaVE8n1kCrcm9AMKzoWB2w03LrY0v7eoj5hYw=s500-c" className="shadow-xl rounded-full align-middle border-none absolute -m-20 -ml-16 lg:-ml-17 max-w-[150px]"/>
                </div>
            </div>
        </div>
        <div className="text-center mt-20">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Van Gogh</h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Amsterdan, Pays-Bas
            </div>
        </div>
        <div className="border-t border-slate-200 p-2 text-center flex justify-center">
                    <a href="javascript:;" className="font-normal text-slate-700 hover:text-slate-400"><img className='h-6 w-6' src={loupe} alt='more info'/></a>
            
      
        </div>
    </div>
</div>



    </div>
  )
}

export default ArtistPresentation