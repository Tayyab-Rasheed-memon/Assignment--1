import Link from 'next/link'
import React from 'react'

function Blog() {
  return (
    
    <div className='text-sky-700 font-thin text-3xl p-2 m-2'>

        <Link href={"home"}>    
     <h1>Blog</h1>

    </Link>
        
    <div className='text-green-400 font-extrabold'>
<Link href={"home"}>    
     <h1>'H_ome'</h1>
    </Link>
</div>
<p className='   text-violet-100 font-extrabold  text-center p-6 text-5xl'>Assalamu alaikum</p>

<div className='   text-black font-extrabold  text-center p-56 text-5xl'>Blog
  
  
</div>

    </div>
    
        
  )   
  

}

export default Blog