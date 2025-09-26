"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useGames } from "@/app/context/gamesContext";
import { useWishlist} from "@/app/context/wishlistContext";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cartContext";



export default function Game(){
    const {games, loading} = useGames()
    const {cgames, setCgames} = useCart()
    const {wgames, setWgames} = useWishlist()
    const [shown, setShown] = useState(0)

    const params = useParams()
    const gid = Number(params.id);
    const game = games.filter(game => game.id === gid)
  

    const check = (<svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>);
    const handleCart = () => {
        if(cgames.some((g) => g.id === game[0].id)){
            setCgames((prev) => prev.filter((g) => g.id !== game[0].id))
        } else {
            setCgames((prev) => [...prev, game[0]])
        }
    }
    const handleWishlist = () => {
        if(wgames.some((g) => g.id === game[0].id)) {
            setWgames((prev) => prev.filter((g) => g.id !== game[0].id))
            
        } else {
            setWgames((prev) => [...prev, game[0]])
            
        }   
        
    }

    const wtext = wgames.some((g) => g.id === game[0].id)? <div className="flex flex-row justify-center items-center gap-1">Added To Wishlist {check} </div>: <div>Add To Wishlist</div>
    const ctext = cgames.some((g) => g.id === game[0].id)? <div className="flex flex-row justify-center items-center gap-1">Added To Cart {check} </div>: <div className="flex justify-center items-center gap-1">Add To Cart</div>
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
                 
                 <div className="w-320 flex m-auto justify-center text-2xl text-white bg-[#1e293b] mb-2 mt-2 "> <h1 className="font-bold">{game[0]?.name}</h1> </div>
                 <div className="grid grid-cols-2 grid-rows-3 h-180 w-320 m-auto mt-1 gap-2">
                    
                    <div className="h-90">
                        <div className="">
                            <img src={game[0]?.mediaList[shown]} alt="" className="rounded-sm"/>
                        </div>

                        <div className="h-20 bg-[#1e293b] w-full flex p-1 pt-2.5 gap-1 justify-center items-center">
                            {
                                game[0]?.mediaList.map((picture, index) => {
                                    return(<div key={index}>
                                        <button onClick={() => setShown(index)}>
                                            <img src={picture} alt="" className="h-17"/>
                                        </button>
                                    </div>)
                                })
                            }
                        </div>
                        <div className="w-50 flex justify-center items-center text-center p-2 bg-[#404da1] text-white rounded-br-2xl rounded-tr-2xl">
                            <button onClick={() => handleWishlist()}>{wtext}</button>
                        </div>
                    </div>

                    <div className="bg-[#1e293b]  text-white w-120 h-fit flex flex-col items-center justify-center my-auto rounded-t-2xl ml-auto">
                        <div>
                            <img src={game[0]?.banner} alt="" className="rounded-sm"/>
                        </div>
                        <div className="flex flex-col justify-center m-2">
                            <p className="mb-2 mt-2">{game[0]?.details}</p>
                            <hr />
                            <ul className="mt-2">
                                <li className="text-[#d2d2d2] m-0">Developer:</li> <li>{game[0]?.developer}</li> <br />
                                <li className="text-[#d2d2d2]">Publisher:</li> <li>{game[0]?.publisher}</li> <br />
                                <li className="text-[#d2d2d2]">Genre:</li> <li>{game[0]?.genre}</li> <br />
                            </ul>
                        </div>
                    </div>
                
                    <div className="row-start-3  w-full h-15 mt-5 flex flex-col gap">   

                        <div className=" text-white flex flex-row gap-5 items-center justify-center rounded-bl-2xl rounded-tl-2xl">
                            <div className="bg-[#1e293b] flex gap-2 justify-center flex-row items-center w-full rounded-tl-2xl rounded-tr-2xl">
                                    <p>Buy: </p> 
                                    <p className="font-extrabold text-2xl">{game[0]?.name}</p> 
                            </div>
             
                            
                        </div>
                        <div className="bg-[#1e293b]  h-4 text-white flex justify-center items-center p-5"><p className="bg-black p-1 rounded-2xl">${game[0]?.price}</p></div>
                        <button className=" flex justify-center p-2 bg-[#404da1] text-white rounded-bl-2xl rounded-br-2xl" onClick={() => handleCart()}>{ctext}</button>
                    </div>

                </div>
            
               
            <Footer/>
        </div>
           
        </>
    )
}