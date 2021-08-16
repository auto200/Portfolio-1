import React from 'react'
import './MyProject.scss'
import { GetProject } from "./GetProject";

export function MyProject(props) {
    const myProject=[
        {id:1,
            name:'LegBook',
            liveLink:'https://upbeat-babbage-8e977d.netlify.app',
            githube:'https://github.com/Margulwb/LegBook',
        },
        {id:2,
            name:'Valorant Damage',
            liveLink:'https://trusting-turing-9fd24d.netlify.app',
            githube:'https://github.com/Margulwb/Valorant-Damage',
        },
        {id:3,
            name:'Quiz',
            liveLink:'https://gallant-shockley-b8919f.netlify.app/',
            githube:'https://github.com/Margulwb/Quiz',
        },
    ]

    return (
        <div className='row mt-5 pt-3' id='my-projects'>
            <div className="row">
                <h1 className="h1">{props.content.heading}</h1>
            </div>
            <div className="row d-flex justify-content-center">
                <GetProject projects={myProject}/>
            </div>
        </div>
    )
}
