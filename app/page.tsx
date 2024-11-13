import Link from "next/link"


import React from 'react'

function Mainpage() {
  return (
    <div className="flex justify-center items-center text-center mt-[200px] text-2xl  font-bold ">
        <Link href={"blog"}>Blog</Link>
        </div>
  )
}



export default Mainpage