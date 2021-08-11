import React, { useState, useEffect } from 'react'
import { useWindowScroll } from "react-use";
import './ScrollProgressBar.scss'

export function ScrollProgressBar() {
    const { y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrolled((y / height) * 100);
    }, [y]);

    return <div className="scroll-bar">
                <div
                    className="scroll-bar__indicator"
                    style={{width:`${scrolled}%`}}>
                </div>
            </div>
}
