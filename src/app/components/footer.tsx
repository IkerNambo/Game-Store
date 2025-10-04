"useClient";
import Image from "next/image";

export default function Footer(){
    return (
        <>
            
            <div className="text-white bg-[#1e293b] w-[100%] overflow-auto flex bottom 0 items-center ">
                <div className="p-10 flex justify-center flex-col">
                    <h1 className="text-3xl font-bold">User Related</h1>
                    <ul className="flex gap-3">
                        
                        <li>Terms Of Service</li>
                        <li>Privacy</li>
                        <li>Jobs</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="ml-auto mr-10">
                    <h1 className="text-3xl font-bold">Social Media</h1>
                    <ul className="flex self-center justify-center">
                        <li className="mr-3">
                            <img src="/images/discordlogo.png" alt="" className="w-10 rounded-2xl"/>
                        </li>
                        <li>
                            <img src="/images/iglogo.png" alt="" className="w-10 rounded-2xl"/>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}