    import { IoIosStar } from "react-icons/io";
    import { IoIosArrowRoundForward } from "react-icons/io";

    export function RedirectCard(){
        return(
            <div className="bg-PURPLE flex p-3 justify-between text-WHITE text-sm rounded-md font-semibold mt-4 mb-4">
                <div className="flex gap-1 items-center text-sm ">
                 <IoIosStar />
                 <p>Star this project on GitHub</p>
               </div>

               <a href="#" className="flex gap-1 items-center text-xs  hover:opacity-60">
                View more
                <IoIosArrowRoundForward size={20}/>
               </a>
            </div>
        )
    }