import React from 'react'
import github from '../images/socials/icon-github.png'
import linkedin from '../images/socials/icon-linkedin.png'
import mail from '../images/socials/icon-mail.png'

function SocialMedias() {
  return (
    
<footer className="p-4 flex flex-wrap justify-center md:flex md:items-center md:justify-between md:p-6 bg-amber-500 ">
    <span className="text-sm sm:text-center text-white">© 2022 <a href="https://www.linkedin.com/in/marionlalonde/" class="hover:underline" target='_blank'>Lalonde Marion</a> -Personal project website.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm  text-white sm:mt-0">
        <li className='ml-4 mr-4'>
            <a href="#" class="mr-4 hover:underline md:mr-6"><img src={github} className='h-6 w-6' /></a>
        </li>
        <li className='ml-4 mr-4'>
            <a href="#" class="mr-4 hover:underline md:mr-6"><img src={linkedin} className='h-6 w-6' /></a>
        </li>
        <li className='ml-4 mr-4'>
            <a href="#" class="mr-4 hover:underline md:mr-6"><img src={mail} className='h-6 w-6' /></a>
        </li>
    </ul>
</footer>   

  )
}

export default SocialMedias