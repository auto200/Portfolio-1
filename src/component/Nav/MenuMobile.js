import React, { useState } from 'react'
import { MenuLinks } from './MenuLinks'
import './Nav.scss'
import { HiMenuAlt2 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'

export function MenuMobile() {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <HiMenuAlt2 className='menu-mobile__hamburger'
                            size='2em' color='black'
                            onClick={() => setOpen(!open)}
                        />

    const closeIcon = <CgClose className='menu-mobile__hamburger'
                            size='2em' color='black'
                            onClick={() => setOpen(!open)}
                        />

    const closeMenu = ()=> setOpen(false)

    return (
        <nav className='menu-mobile'>
            {open ? closeIcon : hamburgerIcon}
            {open && <MenuLinks callbackIsOpen={closeMenu}/>}
        </nav>
    )
}
