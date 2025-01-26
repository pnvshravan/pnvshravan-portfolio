import { useState, useEffect } from "react";

const resolution= ()=>{
    
    const [screenSize, setScreenSize] = useState({
            width: window.screen.width,
            height: window.screen.height,
        });
        
        useEffect(() => {
            const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            };
        
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return screenSize;
}
 
export default resolution;