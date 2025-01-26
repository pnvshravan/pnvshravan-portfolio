import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import resolution from "../utils/resolution";
import { getLocalTime} from "../utils/DateAndTime";
import { DateTime } from "luxon";


const Footer=()=>{
    let screenSize = resolution();

    let localTime = getLocalTime();

    return(
        <>
            <div className="bg-[#151518] flex flex-col place-items-center  h-auto min-h-[200px]: gap-2 font-jost pt-4 pb-4">
                
                <div className="mob-sm:w-[15rem] mob-sm:flex-col m-auto">
                    <p className="mt-2 font-medium text-center mb-4 text-[1.2rem] mob-sm:text-[1rem]"><FaLink className="inline"/> Connect with me at</p>

                    <ul className='flex flex-row justify-center m-2 pb-4 mob-sm:flex-row mob-sm:justify-center border-b-1'>
                        <li className='px-4 hover:scale-125 mob-sm:px-2'><a href="https://www.github.com/pnvshravan"><FaGithub alt="Github" className="size-[2rem] mob-sm:size-[1.75rem]"/></a></li> 
                        <li className='px-4 hover:scale-125 mob-sm:px-2'><a href="https://www.linkedin.com/in/pnvshravan"><FaLinkedin alt="LinkedIn" className="size-[2rem] mob-sm:size-[1.75rem]"/></a></li>
                        <li className='px-4 hover:scale-125 mob-sm:px-2'><a href="https://x.com/pnvshravan"><FaXTwitter alt="X" className="size-[2rem] mob-sm:size-[1.75rem]"/></a></li>
                        <li className='px-4 hover:scale-125 mob-sm:px-2'><a href="https://www.instagram.com/pnv_shravan?igsh=MTNqNGkxY3llNjdoMA=="><FaInstagram alt="Instagram" className="size-[2rem] mob-sm:size-[1.75rem]"/></a></li> 
                        <li className='px-4 hover:scale-125 mob-sm:px-2'><a href="mailto:pnvshravan@gmail.com"><IoMail alt="Email" className="size-[2rem] mob-sm:size-[1.75rem]"/></a></li>
                    </ul>
                    
                    <p className="mt-2 text-center flex items-center justify-center gap-2 mob-sm:flex-col"> 
                        <span className="inline-flex items-center gap-1">{DateTime.local().year} </span>
                        <span>&#169; <i>Proddatur Naga Venkata Shravan</i></span>
                    </p>
                </div>
                <div className="mt-2 flex gap-10 mob-sm:flex mob-sm:flex-col mob-sm:gap-2 mob-sm:place-items-center border-gray-400 border-2 rounded-md mob-sm:border-0">
                    <div className=" text-gray-400 p-2 rounded-sm ">{localTime}</div>
                    <div className=" text-gray-400 p-2 rounded-sm ">{screenSize.width} x {screenSize.height}</div>
                </div>  
            </div>        
        </>
    );
}
export default Footer;