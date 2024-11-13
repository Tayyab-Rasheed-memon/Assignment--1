import Link from "next/link"

function Naveber() {

    return (
      <div>
          <nav className="flex bg-slate-500 h-[50px] justify-between text-center text-white  items-center p-10"  >
              <div className="text-xl font-bold" >
                <Link href={"/"}>Tayyab-Raheed_Memon</Link>                  
              </div>
              <div className="space-x-10 text-xl font-semibold">
                    <Link href={"home"}>Home</Link>
                    <Link href={"about"}>About</Link>
                    <Link href={"projects"}>Projects</Link>
                    <Link href={"contact"}>Contect</Link>
                    
              </div>
          </nav>
          
      </div>
      
    )
  }
  
  export default Naveber