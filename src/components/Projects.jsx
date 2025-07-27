import { FaLink } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const Projects=()=>{

    const projs_list =[
        {
            title:'Plant Recognition and Gardening Support System',
            desc:'Python, FastAPI, ML, YOLOv8, Docker, AWS, REST API, Flutter, Dart',
            github: '',
            dlylink:'https://play.google.com/store/apps/details?id=com.miyu.plantai',
            docs:'https://ijirt.org/Article?manuscript=165047'
        
        },
        {
            title:'Task Management System',
            desc:'Java, Spring Boot, Hibernate, H2, JPA, Git, Maven, REST API',
            github: 'https://github.com/pnvshravan/Tasks-case-study',
            dlylink:'',
            docs: ''
        },
        {
            title:'Unit Converter',
            desc:'Android SDK, Java',
            github:'https://github.com/pnvshravan/UnitConverter',
            dlylink:'',
            docs:''
                
        },
        {
            title:'Postivius Landing Page',
            desc:'ReactJs, CSS3, Figma',
            github: 'https://github.com/pnvshravan/positivus-replica-website',
            dlylink:'https://positivus-replica-website.vercel.app/',
            docs: ''
         
        },
        
    ]

return (
    <>  
        <div className="h-auto min-h-[18rem] mob-sm:mb-6 tablet:pb-8 flex flex-col justify-center items-center p-4"> 
            <h1 className="text-center mb-4">Projects</h1>
            <div className="grid grid-cols-2 gap-16 w-[40rem] mob-sm:flex-col mob-sm:w-[20rem] mob-sm:justify-items-center mob-sm:gap-8 mob-sm:grid-cols-1 tablet:grid-cols-1 tablet:justify-items-center tablet:gap-10">
                {
                    projs_list.map((item, index)=>(
                    <div key={index} className="p-2 border-gray-300 border-2 w-[18rem] rounded-md bg-gray-900 mob-sm:w-[15rem] tablet:w-[25rem] h-max">
                        <h3 className="text-center">{item.title}</h3>
                        <p className="mt-4"><i>({item.desc})</i></p>
                        <div className="flex gap-4 mt-4 place-items-center">
                            {item.github && (
                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="hover:scale-125">
                                    <FaGithub size={20}/>
                                </a>
                            )}
                            {item.dlylink && (
                                <a href={item.dlylink} target="_blank" rel="noopener noreferrer" className="hover:scale-125">
                                    <FaLink size={20}/>
                                </a>
                            )}
                            {item.docs && (
                                <a href={item.docs} target="_blank" rel="noopener noreferrer" className="hover:scale-125">
                                    <FaBook size={20}/>
                                </a>
                            )}
                        </div>
                    </div>
                 ))}
            </div>
            <br />
            <div className="mb-2 mt-10 rounded-md bg-[#233A6C] p-2 w-[40rem] hover:ring-3 hover:ring-teal-400 mob-sm:w-[15rem] tablet:w-[25rem]">
                <h1 className="mb-4">Publications</h1>
                <a href="https://ijirt.org/Article?manuscript=165047" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline font-medium flex items-start gap-2">
                    <FaArrowRightLong className="mt-1 shrink-0"/>
                    Plant Recognition using CNN and Gardening Support System using IoT (2024)
                </a>
            </div>
        </div>
    </>
  );

}

export default Projects;