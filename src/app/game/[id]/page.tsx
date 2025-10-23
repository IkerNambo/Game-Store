"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useGames } from "@/app/context/gamesContext";
import { useWishlist} from "@/app/context/wishlistContext";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cartContext";
import { Btn } from "@/app/components/button";
import Image from "next/image";

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
    if(game[0]?.id === undefined){
        return(<>
            <div className=" text-white m-auto flex flex-col self-center items-center justify-center mt-60">
                    <h1 className="text-8xl font-bold">404</h1>
                    <p className="font-bold">Seems like the page you were looking for does not exist..</p>
                    <Link href='/store' className=""><Btn content="Return To Store"></Btn></Link>
            </div>
        </>)
    }
    return(
        <>
        <div className="flex flex-col min-h-screen">
            
            <Navbar/>
                 
                 <div className="w-[90%] flex m-auto justify-center text-2xl text-white bg-[#1e293b] mb-4 mt-2 "> 
                    <h1 className="font-bold">{game[0]?.name}</h1> </div>
                 <div className="grid grid-cols-1 gap-4 mb-20 md:grid-cols-2 md:grid-rows-3 h-fit md:h-180 w-[90%] m-auto mt-1 ">
                    
                    <div className="h-[70%]  w-[100%] md:h-90 flex-col gap-10">
                        <div className="w-[100%] flex justify-center">
                            <Image src={game[0]?.mediaList[shown]} width={631} height={200} alt="Example image" className="rounded-sm"/>
                        </div>

                        <div className="h-22 bg-[#1e293b] w-full flex p-1 pt-2.5 gap-1 justify-center items-center overflow-auto">
                            {
                                game[0]?.mediaList.map((picture, index) => {
                                    return(<div key={index}>
                                        <button onClick={() => setShown(index)}>
                                            <Image src={picture} width={125} height={30}  alt="" className=""/>
                                        </button>
                                    </div>)
                                })
                            }
                        </div>
                        <div className="w-50 flex justify-center items-center text-center p-2 bg-[#404da1] text-white rounded-bl-2xl rounded-br-2xl">
                            <button onClick={() => handleWishlist()}>{wtext}</button>
                        </div>
                    </div>

                    <div className="bg-[#1e293b]  text-white w-[100%] md:w-120 h-fit flex flex-col items-center justify-center my-auto rounded-t-2xl ml-auto">
                        <div>
                            <Image src={game[0]?.banner} width={500} height={200} 
                             alt="videogame picture" className="rounded-sm"/>
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
                
                    <div className="row-start-3  w-full h-15  flex flex-col">   

                        <div className=" text-white flex flex-row gap-5 items-center grid-rows-1 justify-center rounded-bl-2xl rounded-tl-2xl">
                            <div className="bg-[#1e293b] rounded-2xl flex p-3 gap-2 justify-center flex-col items-center w-full  overflow-hidden">
                                    <p>Buy:</p>
                                    <p className="font-extrabold  text-[90%] md:text-2xl whitespace-nowrap ">
                                        {game[0]?.name}
                                    </p> 
                            </div>
             
                            
                        </div>
                        <div className="flex items-center justify-center w-[100%]">
                            <div className=" text-white flex justify-right items-center"><p className="bg-black  rounded-bl-2xl flex justify-center p-2">${game[0]?.price}</p></div>
                            <button className=" flex justify-center p-2 bg-[#404da1] text-white rounded-br-2xl" onClick={() => handleCart()}>{ctext}</button>
                        </div>
                        
                    </div>

                </div>
            
               
            <Footer/>
        </div>
           
        </>
    )
}