import { FiSun, FiMoon } from 'react-icons/fi'
import { useState } from 'react'

export function ChangeTheme() {
    let clickedClass = 'clicked'
    let [theme , setTheme] = useState()
    const body = document.querySelector('#root')
    const lightMode = 'light'
    const darkMode = 'dark'

    if(localStorage){
        theme = localStorage.getItem("theme")
    }

    if(theme === lightMode || theme === darkMode){
        body.classList.add(theme)
    }else{
        body.classList.add(lightMode)
    }

    const changeTheme = (e) =>{
        if(theme === darkMode){
            body.classList.replace(darkMode, lightMode)
            e.target.classList.remove(clickedClass)
            localStorage.setItem('theme' , 'light')
            setTheme(lightMode)
        }else{
            body.classList.replace(lightMode, darkMode)
            e.target.classList.add(clickedClass)
            localStorage.setItem('theme', 'dark')
            setTheme(darkMode)
        }
    }

    return  <button id='darkMode' onClick={(e)=>changeTheme(e)}
                className={`action-button theme-switch ${theme === 'dark' ? clickedClass : ''}`}>
                <div className="theme-switch__icon">
                    {theme === darkMode ? <FiMoon size='1.5em'/> : <FiSun size='1.5em'/>}
                </div>
            </button>
}
