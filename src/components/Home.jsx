import { FiDownloadCloud } from "react-icons/fi";
import self from "../assets/self-pp.webp"; //apple-emoji-pp

const Home=()=>{
    return (
        <>
            <div className="h-auto min-h-[15rem]
              flex pt-6 justify-center mob-sm:pt-10">
                <div className="flex flex-row gap-10 place-items-center w-[40rem] mob-sm:flex-col mob-sm:w-[15rem] mob-sm:gap-5 tablet:flex-col tablet:w-[25rem] ">
                    <div className=" w-auto h-auto rounded-md hover:ring-gray-400 hover:ring-3">
                        <img src={self} alt="self-photo" height={100} width={150} className="rounded" loading="lazy"/>
                    </div>    
                    <div>
                        <div className="mb-2 rounded-md bg-[#233A6C] p-2 max-w-[30rem] hover:ring-3 hover:ring-teal-400 mob-sm:w-[15rem] ">
                            <h1 className="px-2">About Me</h1>
                            <p className="w-auto p-2">
                                I am <b>Naga Venkata Shravan Proddatur</b>, a recent graduate with a B.E degree in (CSE) from Visvesvaraya Technological University (VTU), Belagavi.
                            </p>
                        </div>
                        <button className="border-gray-400 border-2 rounded-md p-1.5 bg-gray-700 hover:cursor-pointer hover:ring-3 hover:ring-gray-400">
                            <a href="https://drive.google.com/file/d/1zNbA67_tPTq1gQkqGBR68KPvEL8KShuK/view?usp=drive_link" 
                            target="_blank" rel="noopener noreferrer"><FiDownloadCloud className="inline"/> Resume</a>
                        </button>
                    </div>
                </div>   
            </div>  
        </>
    );
}

export default Home;