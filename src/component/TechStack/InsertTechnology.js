import React from 'react'
import { GetIcon } from "./GetIcon";

export function InsertTechnology(props) {
    return (
        <div className='technologies'>
            {props.technologies.map(({id, name, image}) =>
                <li key={id} className='technologies__li pt-4 shadow-sm'>
                    <div className="technologies__icon">
                        {GetIcon(image)}
                    </div>
                    <div className="technologies__name">
                        {name}
                    </div>
                </li>
            )}
        </div>
    )
}
