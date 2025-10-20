"use client";

import Link from "next/link"
import { useWishlist } from "../context/wishlistContext";
import { useCart } from "../context/cartContext";
import {game} from "../types/gameType"


type Game = {
    game: game
}
export function GameRow({game}: Game){
    const {cgames, setCgames} = useCart()
    const {wgames, setWgames} = useWishlist()

    const check = (<svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>);
    const handleCart = () => {
        if(cgames.some((g) => g.id === game.id)){
            setCgames((prev) => prev.filter((g) => g.id !== game.id))
        } else {
            setCgames((prev) => [...prev, game])
        }
    }
    const handleWishlist = () => {
        if(wgames.some((g) => g.id === game.id)) {
            setWgames((prev) => prev.filter((g) => g.id !== game.id))
            
        } else {
            setWgames((prev) => [...prev, game])
            
        }   
        
        
    }
    
    return(
           
        
            <div className="text-white flex flex-col md:flex-row w-full h-fit items-center bg-[#0045b4] hover:bg-[#004cc7] gap-2 p-1 rounded-2xl">
            <Link href={`/game/${game.id}`} className="flex flex-row items-center h-full">
            <img src={game.banner} alt=""  className="h-auto w-auto md:h-30 rounded-2xl"/>

            
            </Link>
            <div className="flex flex-col ml-1 gap-1">
                <p className="wrap-normal">{game.name}</p>
                <p>${game.price}</p>
            </div>
            <div className="flex flex-col ml-auto m-auto md:mr-10 gap-2 ">
                <button className="w-45 bg-[#1e293b] hover:bg-[#384d6e] rounded-2xl p-1.5" onClick={() => handleCart()}>
                    {cgames.some((g) => g.id === game.id)? <div className="flex flex-row justify-center items-center gap-1">Added To Cart {check} </div>: <div>Add To Cart</div>}
                </button>
                <button className="w-45 bg-[#1e293b] hover:bg-[#384d6e] rounded-2xl p-1.5" onClick={() => handleWishlist()}>
                    {wgames.some((g) => g.id === game.id)? <div className="flex flex-row justify-center items-center gap-1">Added To Wishlist {check} </div>: <div>Add To Wishlist</div>}
                </button>
            </div>
           
            </div>
        
        
    )
}
export function CartRow({game}: Game){
    const {setCgames} = useCart()

    const removeFromCart = () => {
        setCgames((prev) => prev.filter((g) => g.id !== game.id))
    }   
    return(
            <div className="text-white flex flex-col md:flex-row w-full h-fit items-center bg-[#0045b4] hover:bg-[#004cc7] gap-2 p-1 rounded-2xl">
            <Link href={`/game/${game.id}`} className="flex flex-row items-center h-full">
            <img src={game.banner} alt=""  className="h-auto w-auto md:h-30 rounded-2xl"/>

            
            </Link>
            <div className="flex flex-col ml-1 gap-1">
                <p className="wrap-normal">{game.name}</p>
                <p>${game.price}</p>
            </div>
            <div className="flex flex-col ml-auto m-auto md:mr-10 gap-2 ">
                <button className="w-45 bg-[#1e293b] hover:bg-[#384d6e] rounded-2xl p-1.5" onClick={() => removeFromCart()}>
                    <p>Remove from cart</p>
                </button>
               
            </div>
           
            </div>
    )
}
