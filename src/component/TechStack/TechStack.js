import React from 'react'
import './TechStack.scss'
import { InsertTechnology } from "./InsertTechnology";

export function TechStack(props) {
    const knownTechnologies=[
        {id:1,name:'HTML',image:'FaHtml5'},
        {id:2,name:'CSS',image:'FaCss3Alt'},
        {id:4,name:'JS',image:'SiJavascript'},
        {id:3,name:'SASS',image:'FaSass'},
        {id:5,name:'REACT',image:'FaReact'},
        {id:7,name:'BOOTSTRAP',image:'FaBootstrap'},
        {id:6,name:'GIT',image:'SiGit'},
    ]

    return  <div className='row my-5'>
                <div className="row mb-4">
                    <h1 className="h1 ">{props.content.heading}</h1>
                </div>
                <div className="row">
                    <InsertTechnology technologies={knownTechnologies}/>
                </div>
                <div className="row my-3">
                    <div className='hr'/>
                </div>
            </div>
}
