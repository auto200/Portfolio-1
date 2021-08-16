import React from 'react'
import './AboutMe.scss'
import  MGPhoto  from './image/me.JPG'

export function AboutMe(props) {

    return <div className='row mt-5 about-me'>
            <div className="col-sm col-md-4 about-me__picture py-5">
                <div className="about-me__border-image">
                    <img src={MGPhoto} alt="Maciej Gurgul"
                    className='about-me__img img-fluid shadow-lg'/>
                </div>
            </div>

            <div className="col-sm col-md about-me__text p-5 d-flex flex-column">
                <div className="about-me__headline shadow-lg mb-3 fs-1 p-1">
                    {props.content.heading}
                </div>
                <div className="about-me__information shadow-lg p-1">
                    {props.content.aFewWordAboutMe}
                </div>
            </div>
        </div>
}
