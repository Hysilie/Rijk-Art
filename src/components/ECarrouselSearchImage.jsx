import React from 'react'

function ECarrouselSearchImage({objectNumber, webImage:{url}}) {

  return (
    <>
{/* eslint-disable-next-line */}
    { url?  <a

      href={`/gallery/detail/${objectNumber}`}
      className="h-full w-full aspect-square  rounded-t-lg block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
     style={{ backgroundImage:`url(${url})` }} 
    />  : 
/* eslint-disable-next-line */
    <a
      href={`/gallery/detail/${objectNumber}`}
      className="h-full w-full aspect-square  rounded-t-lg block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
     style={{ backgroundImage:   `url(https://www.steaua-dunarii.ro/client/img/image-not-found.png)` }} 
    /> }
    </>
  )
}

export default ECarrouselSearchImage