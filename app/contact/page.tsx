import Link from 'next/link'

import React from 'react'

function Contact() {
  return (
    <div className='text-3xl font-serif p-2 text-blue-600'> Contact 
    
    <div className='text-amber-400 font-thin' >
    <Link href={"home"}>    
     <h1>Home</h1>
    </Link>
    </div>
    <p className='   text-violet-100 font-extrabold  text-center p-56 text-5xl'>Assalamu alaikum</p>

    </div>
  )
}

export default Contact