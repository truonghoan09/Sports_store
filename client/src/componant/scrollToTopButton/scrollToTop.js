import { useEffect, useState } from "react";
import "./scrollButton.scss";

const ScrollButton = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <>  
            {scrollY > 0 ? 
            <i className="bi bi-arrow-down-circle arrow" onClick={()=>window.scrollTo(0 , 0)}/>
            : null}
        </>
    )
}

export default ScrollButton;