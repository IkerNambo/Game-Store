"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { game } from "../types/gameType";

type CartContextType = {
    cgames: game[],
    setCgames: React.Dispatch<React.SetStateAction<game[]>>
}

const CartContext = createContext<CartContextType>({
    cgames: [],
    setCgames: () => {}
})

export const useCart = () => useContext(CartContext)

export const CartProvider=({children}: {children: ReactNode})=>{
    const [cgames, setCgames] = useState<game[]>([])


    return(
        <CartContext.Provider value={{cgames, setCgames}}>
            {children}
        </CartContext.Provider>
    );
}