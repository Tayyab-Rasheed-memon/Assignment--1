import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    // <div className='text-3xl font-serif text-indigo-900 p-2 text-'>Home</div>
    <div className='text-3xl font-serif p-2 text-black'>HOME 
    
    <div className='text-amber-400 font-thin' >
    <Link href={"blog"}>    
     <h1>Blog</h1>
    </Link>
    <div className='text-green-400 font-extrabold'>
<Link href={"about"}>    
     <h1>About</h1>
    </Link>
</div>
<p className='   text-violet-100 font-extrabold  text-center p-56 text-5xl'>Assalamu alaikum</p>

    </div>
    
    </div>


  )
}

export default Home