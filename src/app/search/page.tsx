"use client";
import { useRef, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import { useGames } from "../context/gamesContext";
import { game } from "../types/gameType";
import { GameRow } from "../components/gameRow";



export default function Search(){
    const {games, loading} = useGames()
    const [results, setResults] = useState<game[]>([])
    const inputRef = useRef<HTMLInputElement>(null)



    const handleSearch = () => {
        const query = inputRef.current?.value.toLowerCase() || '';
        setResults(games.map((game, id) => ({...game, index: id}))
                             .filter((game) => 
                                game.name.toLowerCase().includes(query)
                             ))
        
    }
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                    <div className="w-[90%] min-h-126 max-h-fit m-auto mb-3 flex-col justify-center">
                         <div className="flex justify-center text-2xl text-white bg-[#1e293b] mb-2 mt-2"> <h1>Search</h1> </div>
                        <div className="bg-amber-300 flex justify-center items-center p-3">
                            <form 
                            onSubmit={(e) => {e.preventDefault(); handleSearch()}}>
                                <input type="text" 
                                   placeholder="search" 
                                   ref={inputRef}
                                   className="border border-amber-120 h-10 w-80"/>
                                <input type="submit" onClick={() => handleSearch()}
                                                 onKeyDown={(e) => {if(e.key==='Enter')handleSearch();}}
                                                 />
                            </form>
                            
                        </div>

                        <div className="h-full bg-[#1e293b] flex flex-col gap-1 p-1 text-white">
                                {
                                    results.length>0? results.map((game) => {return(
                                        <GameRow key={game.id} game={game}/>
                                    )}) : <h1 className="m-auto flex justify-center">no results</h1>
                                }
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
        
        
    );
}