import React from 'react'
import { GetBackground } from "./GetBackground";
import { FaGithub } from "react-icons/fa";
import { RiLiveLine, RiArrowRightCircleFill } from 'react-icons/ri'

export  function GetProject(props) {
    return <>
            {props.projects.map(({id, name, liveLink, githube})=>
                <div key={id} className="col-md-6 row project-box">
                    <div className="project-box__name mt-3">
                        <h2 className='project-box__name-h2'>
                            {name}
                            <a href={githube} className='project-box__name-h2--githube'>
                                <FaGithub/>
                            </a>
                            <a href={liveLink} className='project-box__name-h2--live'>
                                <RiLiveLine/>
                            </a>
                        </h2>
                    </div>
                    <div className="row mb-4">
                        <div className='hr'/>
                    </div>
                    <div className="project-box__hyperlink">
                        <a href={liveLink}>
                            {GetBackground(name)}
                        </a>
                        <div className="project-box__hyperlink--icon">
                            <RiArrowRightCircleFill/>
                        </div>
                    </div>
                </div>
            )}
        </>
}
