import React from 'react'
import SocialMedias from '../components/SocialMedias'

const Home = () => {
  return (
    /* Make a container  */
    <div className=" content-center items-center">
      <div>
          <div className='bg-slate-50 drop-shadow-md h-96  w-screen'>Je suis le contenu de home</div>
          
      </div>
  <SocialMedias />
    </div>

  )
}

export default Home