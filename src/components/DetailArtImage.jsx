import React from 'react'

function DetailArtImage({webImage}) {
  return (
   <>
   {webImage ? (<img src={webImage.url} alt="focus" className="shadow-lg rounded-lg max-w-auto max-h-96 align-middle" />) : (<img src='https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg' alt="focus" className="shadow-lg rounded-lg max-w-auto max-h-96 align-middle" />) }
   </>
  )
}

export default DetailArtImage