//This section contains Skills and Experience

import { FaCircle } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const skillsData =[
    "Java", "Python","HTML5","CSS3","JavaScript","ReactJs","Docker","AWS","Git","Postman","PostgreSQL","MySQL", "Gitlab", "Github Actions", "CI/CD"]

const workdesc1 = [
    'Developed responsive UIs using ReactJs and NextJs (Server Components); worked with ThreeJs for 3D Earth Globe visualization using external APIs.',
    'Prototyped and deployed GitLab CE using Docker for internal CI/CD pipelines; contributed to DevOps research and infrastructure improvements.',
    'Built backend APIs in Node.js/Express.js for login management systems, and developed PWAs using Electron for cross-platform support.',
    'Executed manual and automated test cases that were developed using Playwright.'
]

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
                                <li className="bg-gray-600 font-medium flex items-center gap-1"><FaCircle size={6}/> {item}</li>
                            </div>
                    ))}     
                    {/* {&#9679;} */}
                </div>
                <div className=" mb-2 rounded-md bg-[#233A6C] p-2 w-[40rem] hover:ring-3 hover:ring-teal-400 mob-sm:w-[15rem] tablet:w-[25rem]">
                    <h1 className="px-2">Experience</h1>
                    <div className="flex justify-between gap-6 mob-sm:flex mob-sm:flex-col mob-sm:gap-2 mob-sm:items-center">
                        <a href="https://www.linkedin.com/company/heinwig/" target="_blank" className="hover:underline"><h3 className="px-2 font-semibold">Heinwig Technologies Pvt. Ltd</h3></a>
                        <p className=" font-medium">(Dec 2024 - May 2025)</p>
                    </div>    
                    <p className="px-2"><i>Software Engineer Intern</i></p>
                    {
                        workdesc1 .map((item, index)=>(
                            <div className="p-2 gap-2 flex flex-col" key={index}>
                                <li className="italic flex items-start gap-2">
                                    <FaArrowRightLong className="mt-1 shrink-0" />
                                    {item}
                                </li>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Section2;
