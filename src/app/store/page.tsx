"use client";
import { useState } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useGames } from "../context/gamesContext"
import Link from "next/link";
import Image from "next/image";
export default function Store(){
    const {games, loading} = useGames()
    const [visibleCount, setVisibleCount] = useState(5)
    const [featuredIndex, setFeaturedIndex] = useState(0)

    const visibleGames = games.slice(0, visibleCount)
    const featuredGames = games.filter(game => game.featured)
    
    const handleShowMore = () => {
        setVisibleCount(prev => prev+5)
    }
    const handleShowLess = () => {
        setVisibleCount(prev => prev-5)
    }
    
    return ( 
        <>
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col justify-center">
                <Navbar/>
                <div className="w-320 h-100 self-center flex justify-center mt-5 p-10 items-center">
                    {
                        featuredIndex > 0 && (
                            <button onClick={() => setFeaturedIndex(i => i-1)} className="absolute right-300">
                                <svg className='fill-white bg-[#0045b4] rounded-2xl w-10 h-10' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                            </button>
                        )
                    }
                    
                    <Link href={`/game/${featuredGames[featuredIndex]?.id}`}>
                        <div className="bg-[#1e293b]  p-1.5 flex flex-row">
                            <div>
                                <img src={featuredGames[featuredIndex]?.banner} alt='game banner' className="w-190"/>
                            </div>
                            <div className=" w-50 text-white flex flex-col items-center justify-center">
                                <p className="font-semibold">{featuredGames[featuredIndex]?.name}</p>
                                <p>${featuredGames[featuredIndex]?.price}</p>
                            </div>
                        </div>
                    </Link>
                     {
                        featuredIndex < featuredGames.length-1 && (
                            <button onClick={() => setFeaturedIndex(i => i+1) } className="absolute left-300">
                                <svg className='fill-white bg-[#0045b4] rounded-2xl w-10 h-10' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                            </button>
                        )
                    }
                        
                </div>
                <div className="bg-[#1e293b] w-320 h-fit self-center flex justify-center mt-5 items-center mb-5 flex-col gap-5 p-10">
                    <div className="flex flex-wrap justify-center gap-1 m-1">
                        {
                        visibleGames.map((game) => {
                            return(
                            <Link key={game.id} href={`/game/${game.id}`}>
                                <div  className="flex flex-col">
                                <div><img src={game.cover} alt="" className="w-55 h-74 rounded-sm rounded-b-none"/></div>
                                <div className="bg-[#0045b4]  text-white flex justify-center rounded-sm rounded-t-none">${game.price}</div>
                                </div>
                            </Link>
                            )
                        })
                        }
                    </div>
                   
                    <div className="flex gap-10">
                        {visibleCount < games.length && (
                        <button className='bg-[#0045b4] rounded-2xl p-3 text-white' onClick={() => handleShowMore()}>
                            show more
                        </button>
                        )}
                        {visibleCount > 5 && (
                        <button className='bg-[#0045b4] rounded-2xl p-3 text-white' onClick={() => handleShowLess()}>
                            show less
                        </button>
                        )}
                    </div>
                    
                </div>
            </div>
                
            <Footer/>
        </div>
            
            
        </>
    ) 
}