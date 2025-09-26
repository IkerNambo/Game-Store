

type contentProp = {
    content: string
}

export function Btn({content}: contentProp){
    return(
        <button className="bg-[#0045b4] rounded-md p-2 m-3 w-40 text-white"> {content} </button>
    );
}
export function Btnnav({content}: contentProp){
    return(
        <button className="bg-blue-900 rounded-md w-20 h-9 text-white border-white border-2 flex justify-center items-center"> {content} </button>
    );
}


