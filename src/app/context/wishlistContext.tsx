"use client"; 
import { createContext, ReactNode, useContext, useState,} from "react";
import { game } from "../types/gameType";

type WishlistContextType = {
    wgames: game[]
    setWgames: React.Dispatch<React.SetStateAction<game[]>>
}


const WishlistContext = createContext<WishlistContextType>({
    wgames: [],
    setWgames: () => {}
})

export const useWishlist = () => useContext(WishlistContext)

export const WishlistProvider = ({children}: {children: ReactNode}) => {
    const [wgames, setWgames] = useState<game[]>([])
    
    return (
        <WishlistContext.Provider value={{wgames, setWgames}}>
            {children}
        </WishlistContext.Provider>
    );
}   