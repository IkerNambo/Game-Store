"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { game } from "../types/gameType";


type GamesContextType = {
    games: game[],
    loading: boolean
}


const GamesContext = createContext<GamesContextType>({
    games: [],
    loading: true,
})


export const useGames = () => useContext(GamesContext)

export const GamesProvider = ({children}: {children: ReactNode}) => {
    const [games, setGames] = useState<game[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/games.json")
        .then(res=> res.json())
        .then((data) => {
            setGames(data.games)
            setLoading(false)
        })
    }, [])

    return(
        <GamesContext.Provider value={{games, loading}}>
            {children}
        </GamesContext.Provider>
    );
}