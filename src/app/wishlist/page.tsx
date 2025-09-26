"use client";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import {useWishlist} from "../context/wishlistContext";
import {GameRow}from "../components/gameRow";


export default function Wishlist(){
    const {wgames, setWgames} = useWishlist()
 
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            
                <div className=" w-320 min-h-126 max-h-fit m-auto">
                    <div className="flex justify-center text-2xl text-white bg-[#1e293b] mb-2 "> <h1>Wishlist</h1> </div>
                    <div className="h-fit bg-[#1e293b] flex flex-col gap-1 mb-2 p-1">
                        {
                           wgames.length>0 ? wgames.map((game) => {
                            return(
                                <GameRow key={game.id}
                                 game={game}/>
                                    
                              
                            );
                           }) : <h1 className="text-white flex justify-center">no items in wishlist</h1>

                           

                        }
                    </div>
                </div>
            
            
            <Footer/>
        </div>
        </>
        
        
    );
}