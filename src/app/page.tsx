import Link from "next/link";
import {Btn} from "./components/button"
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata = {
  title: 'Game Store'
}

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
        
        <Navbar/>
      <div className="flex flex-col self-center justify-center items-center h-150">
        <h1 className="text-white font-extrabold text-4xl">Welcome to Game Store!</h1>
        <div>
          <Link href='/store'><Btn content={'store'}/></Link>
          <Link href='/cart'><Btn content={'cart'}/></Link>
        </div>
      </div>
      <Footer/>
    </div>
      
    </>
  );
}


