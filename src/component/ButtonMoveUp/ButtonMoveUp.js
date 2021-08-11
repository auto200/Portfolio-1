import React , { useState } from 'react'
import { BsArrowUp } from "react-icons/bs";
import './ButtonMoveUp.scss'

export function ButtonMoveUp() {
    const [visible , setVisible] = useState(false)

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop
        scrolled > 100 ? setVisible(true) : setVisible(false)
    }

    const handleScrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible);

    return <div className="button-scroll-up shadow-lg" onClick={handleScrollTop}
                style={{display:visible ? 'block' : 'none'}}>
        <span className='button-scroll-up__icon'><BsArrowUp size='2em'/></span>
    </div>
}
