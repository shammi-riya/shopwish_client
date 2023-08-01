import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scrolltop = () => {
    const [showBtn, setShowBtn] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
             <button
                onClick={scrollToTop}
                className={`btn text-light p-2 fs-6 ${showBtn ? 'd-block' : 'd-none'}`}
                style={{ 
                    position: 'fixed', 
                    bottom: '280px', 
                    right: '20px', 
                    background: '#fd7e14',
                    writingMode: 'vertical-rl', 
                    textOrientation: 'upright', 
                }}
            >
               <FaArrowUp></FaArrowUp> Back  Top 
            </button>
        </div>
    );
};

export default Scrolltop;
