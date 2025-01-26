import { FaGooglePlay } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Projects=()=>{
    return (
        <>
            <div className="h-auto min-h-[18rem] p-2 mob-sm:mb-6 tablet:pb-8 flex flex-col justify-center items-center">
                <h1 className="text-center mb-4">Projects</h1>
                <div className="flex justify-center gap-16 w-[40rem] mob-sm:flex-col mob-sm:w-[20rem] mob-sm:items-center mob-sm:gap-8 tablet:flex-col tablet:w-[25rem] tablet:items-center tablet:gap-10">
                    <div className="p-2 border-gray-300 border-2 w-[18rem] rounded-md bg-gray-900 mob-sm:w-[15rem] tablet:w-[25rem]">
                        <h3 className="text-center">Plant Recognition and Gardening Support System</h3>
                        <p className="mt-4"><i>(Python, FastAPI, YOLOv8, AWS, REST API)</i></p>
                        <span className="inline-flex gap-4 mt-4 place-items-center ">
                           Links: 
                           <a href="https://play.google.com/store/apps/details?id=com.miyu.plantai" target="_blank" className="hover:scale-125"><FaGooglePlay size={20}/></a>
                            <a href="https://ijirt.org/Article?manuscript=165047" target="_blank" className="hover:scale-125"><FaBook size={20}/></a>
                        </span>
                    </div>
                    <div className="p-2 border-gray-300 border-2 w-[18rem]
                    rounded-md bg-gray-900 mob-sm:w-[15rem] tablet:w-[25rem]">
                        <h3 className="text-center">Unit Converter</h3>
                        <p className="mt-4"><i>(Android SDK, Java)</i></p>
                        <span className="inline-flex gap-2 mt-4 place-items-center">
                            Links: 
                            <a href="https://github.com/pnvshravan/UnitConverter" target="_blank" className="hover:scale-125"><FaGithub size={20}/></a>
                        </span>
                    </div>
                </div> 
            </div>
        </>
    );

}

export default Projects;