//This section contains Skills and Experience
import { FaCircle } from "react-icons/fa6";

const skillsData =[
    "Java", "Python","HTML5","CSS3","JavaScript","React","Docker","AWS","Git","Postman","PostgreSQL","MySQL"]

const Section2=()=>{
    return (
        <>
            <div className="p-6 h-auto min-h-[20rem] gap-4 flex flex-col items-center mob-sm:flex-col mob-sm:items-center">
                <div className="border-gray-300 border-2 p-2 rounded-md w-[40rem] mob-sm:w-[15rem] tablet:w-[25rem] bg-gray-900">
                    <h1 className="px-2">
                        Skills
                    </h1>
                    {
                        skillsData.map((item, index)=>(
                            <div className="p-2 gap-2 skills-list inline-flex" key={index}>
                                <li className="bg-gray-600 font-medium"><span className="inline-block align-middle"><FaCircle size={6}/></span> {item}</li>
                            </div>
                    ))}     
                    {/* {&#9679;} */}
                </div>
                <div className=" mb-2 rounded-md bg-[#233A6C] p-2 w-[40rem] hover:ring-3 hover:ring-teal-400 mob-sm:w-[15rem] tablet:w-[25rem]">
                    <h1 className="px-2">Experience</h1>
                    <div className="flex justify-between gap-6">
                        <a href="https://www.linkedin.com/company/heinwig/" target="_blank" className="hover:underline"><h3 className="px-2 font-medium">Heinwig Technologies Pvt. Ltd</h3></a>
                        <p className="px-2 font-light">(Dec 2024 - Present)</p>
                    </div>    
                    <p className="px-2"><i>Software Engineer Intern</i></p>
                </div>
            </div>
        </>
    );
}

export default Section2;