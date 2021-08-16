import React from 'react'
import './Nav.scss'

export function MenuLinks(props) {
    return (
        <ul className='menu__links'>
            <li className='menu__link'
                onClick={()=> props.callbackIsOpen()}>
                <a href="#tech-stack">
                    Tech Stack
                </a>
            </li>
            <li className='menu__link'
                onClick={()=> props.callbackIsOpen()}>
                <a href="#my-projects">
                    My Projects
                </a>
            </li>
            <li className='menu__link'
                onClick={()=> props.callbackIsOpen()}>
                <a href="#footer">
                    Contact
                </a>
            </li>
        </ul>
    )
}
