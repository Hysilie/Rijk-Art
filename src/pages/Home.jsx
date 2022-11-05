import React from 'react'
import SocialMedias from '../components/SocialMedias'

const Home = () => {
  return (
    /* Make a container  */
    <main>
      <div className="bg-amber-500 h-screen  content-center items-center">
          <div className='bg-slate-50 drop-shadow-md h-96 w-screen'>Je suis le contenu de home</div>
          <SocialMedias />
      </div>

    </main>

  )
}

export default Home