"useClient";
import Link from "next/link";


export default function Navbar(){
    return (
        <>
            <div className="flex flex-wrap gap-15 bg-[#1e293b] w-[90%] overflow-auto h-fit m-auto mt-10 rounded-md justify-center items-center text-white">

                    <Link href='/wishlist'>
                           <div className="flex-col justify-center items-center hover:bg-[#354765] active:bg-[#506a97] transition duration-150 ease p-1 rounded-sm">
                               <svg className='fill-white m-auto' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/></svg>
                                <p>Wishlist</p>
                            </div>
                    </Link>

                    <Link href='/cart'>
                            <div className="flex-col justify-center items-center hover:bg-[#354765] active:bg-[#506a97] transition duration-150 ease p-1 rounded-sm">
                                <svg className='fill-white m-auto' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                                <p>Cart</p>
                            </div>
                    </Link>
                    
                    <Link href='/'>
                            <h2 className="hover:text-[#6484bc] active:text-[#506a97]">Home</h2>
                    </Link>

                    <Link href='/store'>
                            <div className="flex-col justify-center items-center hover:bg-[#354765] active:bg-[#506a97] transition duration-150 ease p-1 rounded-sm">
                                <svg className='fill-white m-auto' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                                <p>Store</p>
                            </div>
                    </Link>

                    <Link href='/search'>
                            <div className="flex-col justify-center items-center hover:bg-[#354765] transition duration-150 ease p-1 rounded-sm active:bg-[#506a97]">
                                <svg className='fill-white m-auto' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                <p>Search</p>
                            </div>
                                
                    </Link>

                    
            </div>
        </>
    )
}