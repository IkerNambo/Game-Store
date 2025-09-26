"use client";
import Footer from "../components/footer";
import { CartRow } from "../components/gameRow";
import Navbar from "../components/navbar"
import { useCart } from "../context/cartContext";
import {Btn} from '@/app/components/button'

export default function Cart(){
    const {cgames, setCgames} = useCart()

    const total = cgames.reduce((sum, game) => sum + game.price, 0).toFixed(2)

    return (

        <>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
                <div className="w-320 flex m-auto justify-center text-2xl text-white bg-[#1e293b] mb-2 mt-2 "> <h1 className="font-bold">Cart</h1> </div>
                 
                <div className="grid text-white grid-cols-2 grid-rows-2 h-130 w-320 m-auto">
                    <div className="bg-[#1e293b] min-h-126 max-h-fit flex flex-col gap-1 p-1 row-span-full mb-2 overflow-auto">
                        {
                            cgames.length>0? cgames.map((game) => {
                                return(<CartRow key={game.id} game={game}/>)
                            }) : <h1 className="flex justify-center items-center">no items in cart</h1>
                        }
                    </div>
                    <div className="bg-[#1e293b] justify-center w-120 h-60 flex my-auto mx-auto">
                        <div className="p-1 flex flex-col gap-10 justify-center">
                            <div>
                                <p>We accept the following payment methods: </p>
                            <ul className="flex flex-row justify-center gap-5">
                                <li><img className="h-13" src="/images/visa.png" alt="" /></li>
                                <li><img className="h-13" src="/images/mastercard.png" alt="" /></li>
                                <li><img className="h-13" src="/images/paypal.png" alt="" /></li>
                            </ul>
                            </div>
                            
                            <select className="flex justify-center text-center bg-[#0045b4] border-none rounded-2xl p-2" name="" id="">
                                <option className="hover:bg-[#384d6e]" value="">Choose an option</option>
                                <option value="">Mastercard</option>
                                <option value="">Visa </option>
                                <option value="">Paypal</option>
                            </select>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="bg-[#1e293b] w-120 h-60 flex flex-col justify-center my-auto mx-auto">
                        <div className="p-2 text-start overflow-auto">
                            {
                                cgames.map((game, id) => {
                                    return(
                                        <div className="flex" key={id}>
                                           <p className="mr-auto">{game.name}</p> <p className="ml-auto">${game.price}</p> 
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <hr />
                        <div className="p-2 flex flex-col justify-center items-center gap-4 text-center">
                            <p className="font-bold text-2xl">total: ${total}</p>
                            <Btn content={'Continue to payment'}/>
                        </div>
                    </div>  
                </div>
            <Footer/>
        </div>
            
        </>

    );
}