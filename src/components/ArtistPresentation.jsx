import React from 'react'
import ArtistModal from './ArtistModal'

function ArtistPresentation() {
  return (
    <div>

<div className="relative w-80 mt-6  break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20 h-76">
    <div className="px-6">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className="relative drop-shadow-md">
                    <img alt='Portrait of' src="https://lh3.googleusercontent.com/Ckjq-HkB2XhEsbuMsei0MR5fLTODfkcXY8qQTG-XLHVxE0jLO9DnSYaVE8n1kCrcm9AMKzoWB2w03LrY0v7eoj5hYw=s500-c" className="drop-shadow-md rounded-full align-middle border-none absolute -m-20 -ml-16 lg:-ml-17 max-w-[150px]"/>
                </div>
            </div>
        </div>
        <div className="text-center mt-20">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1" id="artist-name">Van Gogh</h3>
            <div className="text-xs mt-0 mb-2 text-slate-300 font-bold uppercase">
               Amsterdam, Pays-Bas
            </div>
        </div>
        <div className="border-t border-slate-200 p-2 text-justify text-xs flex flex-col text-black justify-center">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt exercitationem quod ipsa debitis perspiciatis adipisci ipsum, sequi placeat, ex numquam perferendis error</p>
            <ArtistModal/>            
      
        </div>
    </div>
</div>



    </div>
  )
}

export default ArtistPresentation