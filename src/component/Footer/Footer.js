import React from 'react'
import './Footer.scss'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from 'react-icons/go'

export function Footer(props) {
    return <div className='row mt-5 py-3 footer' id='footer'>
                <h2 className="footer__h2">{props.content.heading}</h2>
                   <div className="row">
                        <div className='footer__hr'/>
                   </div>
                <div className="footer__links">
                    <a href="https://github.com/Margulwb" className='footer__link'>
                        <span className="footer__icon"><FaGithub/></span> GitHub
                    </a>
                    <a href="mailto:maciejgurgul01@gmail.com" className='footer__link'>
                        <span className="footer__icon"><GoMail/></span> Mail
                    </a>
                    <a href="mhttps://www.linkedin.com/in/maciej-gurgul-935904213/" className='footer__link'>
                        <span className="footer__icon"><FaLinkedin/></span> Linkedin
                    </a>
                </div>
            </div>
}
