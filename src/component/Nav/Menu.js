import React from 'react'
import { MenuLinks } from './MenuLinks'
import './Nav.scss'

export function Menu() {
    return (
        <nav className='menu'>
            <MenuLinks callbackIsOpen={()=>console.log()} />
        </nav>
    )
}
